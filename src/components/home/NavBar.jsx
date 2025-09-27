export default function NavBar() {
	return (
		<div className="navbar--container shinny">
			<div className="navbar shinny">
				<a className="navbar--item hover" href="#about">
					About
				</a>
				<a className="navbar--item hover" href="#projects">
					Projects
				</a>
				<a className="navbar--item hover" href="#contact">
					Contact
				</a>
				<a className="navbar--item hover" href="/resume" target="_blank">
					Resume
				</a>
			</div>
		</div>
	)
}
