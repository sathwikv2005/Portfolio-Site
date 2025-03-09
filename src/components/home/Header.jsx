import { LuGithub } from 'react-icons/lu'
import { FaLinkedinIn } from 'react-icons/fa6'

export default function Header() {
	return (
		<div className="home--header">
			<div className="home--name">
				<span>SATHWIK</span>
				<span>VEMULA</span>
			</div>
			<div className="home--socials--wrapper">
				<a href="https://www.linkedin.com/in/sathwikv2005/" target="blank">
					<FaLinkedinIn className="home--socials hover" />
				</a>
				<a href="https://github.com/sathwikv2005" target="blank">
					<LuGithub className="home--socials hover" />
				</a>
			</div>
			<div className="home--web--dev typewriter">WEB DEVELOPER</div>
		</div>
	)
}
