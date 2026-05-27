export function smoothScroll(targetId, duration = 1800, maxSpeed = 1.5) {
	const target = document.querySelector(targetId)

	if (!target) return

	const targetPosition = target.getBoundingClientRect().top + window.pageYOffset

	const startPosition = window.pageYOffset
	const distance = targetPosition - startPosition

	// px per ms
	const requiredDuration = Math.abs(distance) / maxSpeed

	// use whichever duration is longer
	duration = Math.max(duration, requiredDuration)

	let startTime = null

	function easeOutQuad(t) {
		return 1 - (1 - t) * (1 - t)
	}

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime

		const timeElapsed = currentTime - startTime
		const progress = Math.min(timeElapsed / duration, 1)

		window.scrollTo(0, startPosition + distance * easeOutQuad(progress))

		if (timeElapsed < duration) {
			requestAnimationFrame(animation)
		}
	}

	requestAnimationFrame(animation)
}

export default function NavBar() {
	const handleScroll = (e, target) => {
		e.preventDefault()
		smoothScroll(target, 1800)
	}

	return (
		<div className="navbar--container shinny">
			<div className="navbar shinny">
				<a className="navbar--item hover" href="#about" onClick={(e) => handleScroll(e, '#about')}>
					About
				</a>

				<a
					className="navbar--item hover"
					href="#projects"
					onClick={(e) => handleScroll(e, '#projects')}
				>
					Projects
				</a>

				<a
					className="navbar--item hover"
					href="#contact"
					onClick={(e) => handleScroll(e, '#contact')}
				>
					Contact
				</a>

				<a className="navbar--item hover" href="/resume" target="_blank" rel="noreferrer">
					Resume
				</a>
			</div>
		</div>
	)
}
