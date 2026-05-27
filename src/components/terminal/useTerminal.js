import { useEffect, useRef, useState } from 'react'

import { runCommand } from './terminalCommands'
import useTerminalBoot from './useTerminalBoot'

export default function useTerminal() {
	const terminalRef = useRef(null)
	const inputRef = useRef(null)

	const [isActive, setIsActive] = useState(false)
	const [firstTime, setFirstTime] = useState(true)
	const [cantype, setCantype] = useState(false)

	const [command, setCommand] = useState('')
	const [history, setHistory] = useState([])
	const [historyIndex, setHistoryIndex] = useState(-1)

	const [currentDir, setCurrentDir] = useState('~')

	const [outputColor, setOutputColor] = useState('#00ff88')

	useTerminalBoot({
		isActive,
		firstTime,
		setFirstTime,
		setCantype,
		setCommand,
		setHistory,
	})

	useEffect(() => {
		if (!terminalRef.current || !inputRef.current) return

		terminalRef.current.scrollTop = terminalRef.current.scrollHeight

		inputRef.current.scrollLeft = inputRef.current.scrollWidth
	}, [history, command])

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsActive(entry.isIntersecting)
			},
			{
				threshold: 0.4,
			},
		)

		if (terminalRef.current) {
			observer.observe(terminalRef.current)
		}

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		if (!isActive || !cantype) return

		function handleKeyDown(e) {
			if (e.ctrlKey || e.metaKey || e.altKey) return

			if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
				e.preventDefault()
			}

			if (e.key === 'Backspace') {
				setCommand((prev) => prev.slice(0, -1))

				return
			}

			if (e.key === 'ArrowUp') {
				if (!history.length) return

				const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(historyIndex - 1, 0)

				setHistoryIndex(newIndex)

				setCommand(history[newIndex]?.command || '')

				return
			}

			if (e.key === 'Enter') {
				const trimmed = command.trim()

				if (trimmed) {
					const output = runCommand({
						raw: trimmed,
						currentDir,
						setCurrentDir,
						setOutputColor,
						setHistory,
					})

					if (trimmed !== 'clear') {
						setHistory((prev) => [
							...prev,
							{
								command: trimmed,
								output,
								color: outputColor,
								dir: currentDir,
							},
						])
					}
				}

				setHistoryIndex(-1)
				setCommand('')

				return
			}

			if (e.key.length === 1) {
				setCommand((prev) => prev + e.key)
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [isActive, cantype, command, history, historyIndex, currentDir, outputColor])

	return {
		terminalRef,
		inputRef,
		history,
		command,
		currentDir,
		outputColor,
	}
}
