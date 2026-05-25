import { useEffect, useRef, useState } from 'react'

export default function Terminal() {
	const terminalRef = useRef(null)

	const [isActive, setIsActive] = useState(false)
	const [command, setCommand] = useState('')
	const [history, setHistory] = useState([])

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
		if (!terminalRef.current) return

		terminalRef.current.scrollTop = terminalRef.current.scrollHeight
	}, [history, command])

	useEffect(() => {
		if (!isActive) return

		function handleKeyDown(e) {
			if (e.ctrlKey || e.metaKey || e.altKey) return

			// backspace
			if (e.key === 'Backspace') {
				setCommand((prev) => prev.slice(0, -1))
				return
			}

			// enter
			if (e.key === 'Enter') {
				if (command.trim()) {
					setHistory((prev) => [...prev, command])
				}

				setCommand('')
				return
			}

			// printable chars
			if (e.key.length === 1) {
				setCommand((prev) => prev + e.key)
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [isActive, command])

	return (
		<div ref={terminalRef} className="terminal--end">
			<p>
				<span>{'>'}</span> Thanks for visiting.
			</p>

			<p>
				<span>{'>'}</span> status: building cool things...
			</p>

			{history.map((item, index) => (
				<p key={index}>
					<span>{'>'}</span> {item}
				</p>
			))}

			<p className="terminal--input">
				<span>{'>'}</span> {command}
				<span className="terminal--caret">_</span>
			</p>
		</div>
	)
}
