import { FaGithub, FaHtml5, FaJava, FaNodeJs, FaAndroid } from 'react-icons/fa6'
import { FaReact, FaJsSquare, FaGlobe, FaApple, FaGlobeAmericas } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiSocketdotio } from 'react-icons/si'

export default function Projects() {
	return (
		<div id="projects" className="home--project--wrapper">
			<div className="project--heading">Projects</div>
			<div className="home--project">
				<div className="home--project--details">
					<a target="blank" href="https://github.com/sathwikv2005/KitsuneAndroidApp">
						<div className="project--title hover">Better VTOP</div>
					</a>
					<div className="project--des">
						BetterVTOP is a React Native app that enhances the VITAP's student portal (VTOP)
						experience by providing a faster, cleaner, and more user-friendly interface. It
						integrates core features like attendance tracking, exam schedules, and file downloads
						while ensuring smooth navigation and an optimized mobile-first design.
					</div>
					<div className="project--techstack home--techstack">
						<div className="home--skill hover shinny">
							<FaReact color="#61DBFB" className="home--skill--icon" />
							React-Native
						</div>
						<div className="home--skill hover shinny">
							<FaNodeJs color="#38783b" className="home--skill--icon" />
							Nodejs
						</div>
						<div className="home--skill hover shinny">
							<FaAndroid color="#38783b" className="home--skill--icon" />
							Android
						</div>
						<div className="home--skill hover shinny">
							<FaApple color="#ffffff" className="home--skill--icon" />
							iOS
						</div>
						<div className="home--skill hover shinny">
							<FaGlobeAmericas color="#ffffff" className="home--skill--icon" />
							Web Scraping
						</div>
					</div>
					<div className="project--btns">
						<a target="blank" href="https://github.com/sathwikv2005/BetterVTOP-VITAP">
							<FaGithub className="project--btn hover" />
						</a>
					</div>
				</div>
				<img
					src="/betterVTOP.png"
					onClick={() => {
						window.open(
							'https://github.com/sathwikv2005/BetterVTOP-VITAP',
							'_blank',
							'noopener,noreferrer'
						)
					}}
					className="home--project--img hover"
				/>
			</div>
			<div className="home--project">
				<div className="home--project--details">
					<a target="blank" href="https://smallurl.sathwik.xyz ">
						<div className="project--title hover">Small URL</div>
					</a>
					<div className="project--des">
						Small URL is a URL shortening service built with ReactJS, ExpressJS, and MongoDB. It
						allows users to shorten long URLs into short links, track visit data, and view
						analytics.
					</div>
					<div className="project--techstack home--techstack">
						<div className="home--skill hover shinny">
							<FaReact color="#61DBFB" className="home--skill--icon" />
							React
						</div>
						<div className="home--skill hover shinny">
							<FaNodeJs color="#38783b" className="home--skill--icon" />
							Nodejs
						</div>
						<div className="home--skill hover shinny">
							<SiExpress className="home--skill--icon" />
							Express
						</div>
						<div className="home--skill hover shinny">
							<SiMongodb color="#00684a" className="home--skill--icon" />
							Mongo DB
						</div>
						<div className="home--skill hover shinny">
							<FaJsSquare color="#f7df1d" className="home--skill--icon" />
							Java Script
						</div>
						<div className="home--skill hover shinny">
							<FaHtml5 color="#e54d26" className="home--skill--icon" />
							HTML, CSS
						</div>
					</div>
					<div className="project--btns">
						<a target="blank" href="https://github.com/sathwikv2005/smallURL">
							<FaGithub className="project--btn hover" />
						</a>
						<a target="blank" href="https://smallurl.sathwik.xyz">
							<FaGlobe className="project--btn hover" />
						</a>
					</div>
				</div>
				<img
					src="/smallurl.png"
					onClick={() => {
						window.open('https://smallurl.sathwik.xyz', '_blank', 'noopener,noreferrer')
					}}
					className="home--project--img hover"
				/>
			</div>
			<div className="home--project">
				<div className="home--project--details">
					<a target="blank" href="https://tictactoe.sathwik.xyz">
						<div className="project--title hover">Tic Tac Toe</div>
					</a>
					<div className="project--des">
						A real-time, multiplayer Tic Tac Toe game built using HTML, CSS, JavaScript, and
						Socket.io. The game leverages Socket.io for real-time communication, allowing two
						players to connect and play seamlessly. Socket.io handles events like player moves, game
						resets, and win conditions, ensuring instant updates for both players.
					</div>
					<div className="project--techstack home--techstack">
						<div className="home--skill hover shinny">
							<FaNodeJs color="#38783b" className="home--skill--icon" />
							Nodejs
						</div>
						<div className="home--skill hover shinny">
							<SiExpress className="home--skill--icon" />
							Express
						</div>
						<div className="home--skill hover shinny">
							<SiSocketdotio className="home--skill--icon" />
							Socket.io
						</div>
						<div className="home--skill hover shinny">
							<SiMongodb color="#00684a" className="home--skill--icon" />
							Mongo DB
						</div>
						<div className="home--skill hover shinny">
							<FaJsSquare color="#f7df1d" className="home--skill--icon" />
							Java Script
						</div>
						<div className="home--skill hover shinny">
							<FaHtml5 color="#e54d26" className="home--skill--icon" />
							HTML, CSS
						</div>
					</div>
					<div className="project--btns">
						<a target="blank" href="https://github.com/sathwikv2005/Tic-Tac-Toe">
							<FaGithub className="project--btn hover" />
						</a>
						<a target="blank" href="https://tictactoe.sathwik.xyz">
							<FaGlobe className="project--btn hover" />
						</a>
					</div>
				</div>
				<img
					src="/tictactoe.png"
					onClick={() => {
						window.open('https://tictactoe.sathwik.xyz', '_blank', 'noopener,noreferrer')
					}}
					className="home--project--img hover"
				/>
			</div>
		</div>
	)
}
