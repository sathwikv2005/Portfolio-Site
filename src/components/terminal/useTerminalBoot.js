import { useEffect } from 'react'

export const terminalAsci = ` 
 ███████╗ █████╗ ████████╗██╗  ██╗██╗    ██╗██╗██╗  ██╗
 ██╔════╝██╔══██╗╚══██╔══╝██║  ██║██║    ██║██║██║ ██╔╝
 ███████╗███████║   ██║   ███████║██║ █╗ ██║██║█████╔╝ 
 ╚════██║██╔══██║   ██║   ██╔══██║██║███╗██║██║██╔═██╗ 
 ███████║██║  ██║   ██║   ██║  ██║╚███╔███╔╝██║██║  ██╗
 ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝╚═╝  ╚═╝`

const initialText = ['portfolio terminal initialized.', 'type "help" to list commands.']

export default function useTerminalBoot({
	isActive,
	firstTime,
	setFirstTime,
	setCantype,
	setCommand,
	setHistory,
}) {
	useEffect(() => {
		if (!isActive || !firstTime) return

		async function typeInitial() {
			setCantype(false)
			setHistory([
				{
					command: terminalAsci,
					output: null,
					color: '#00ff88',
					dir: '~',
				},
			])
			for (const text of initialText) {
				let current = ''

				for (let i = 0; i < text.length; i++) {
					current += text[i]

					setCommand(current)

					await new Promise((resolve) => setTimeout(resolve, 40))
				}

				setHistory((prev) => [
					...prev,
					{
						command: current,
						output: null,
						color: '#00ff88',
						dir: '~',
					},
				])

				setCommand('')

				await new Promise((resolve) => setTimeout(resolve, 300))
			}

			setCantype(true)
			setFirstTime(false)
		}

		typeInitial()
	}, [isActive, firstTime])
}
