import useTerminal from './useTerminal'

export default function Terminal() {
	const { terminalRef, inputRef, history, command, currentDir, outputColor } = useTerminal()

	return (
		<div ref={terminalRef} className="terminal--end">
			{history.map((item, index) => (
				<div key={index}>
					<p>
						<span>{item.dir}$</span> {item.command}
					</p>

					{item.output && (
						<p
							className="terminal--output"
							style={{
								color: outputColor,
							}}
						>
							{item.output}
						</p>
					)}
				</div>
			))}

			<p ref={inputRef} className="terminal--input">
				<span>{currentDir}$</span> {command}
				<span className="terminal--caret">_</span>
			</p>
		</div>
	)
}
