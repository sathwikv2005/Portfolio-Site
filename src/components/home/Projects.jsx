import { FaExternalLinkAlt } from 'react-icons/fa'

import * as Skill from '../skill/Skill'
import Project from '../project/Project'

export default function Projects() {
	return (
		<div id="projects" className="home--project--wrapper">
			<div className="project--heading">Projects</div>

			<Project
				title={'Helium'}
				des={[
					<>
						Built a programming language from scratch with a custom{' '}
						<span className="project--highlight">bytecode virtual machine</span>,{' '}
						<span className="project--highlight">compiler</span>, and runtime system in C.
					</>,
					<>
						Implemented <span className="project--highlight">garbage collection</span> and
						compile-time optimizations for efficient execution.
					</>,
					<>Designed language features including functions, lexical scoping, and control flow.</>,
					<>
						Achieved runtime benchmarks running{' '}
						<span className="project--highlight">1.36x faster</span> than Python 3.11.2 and{' '}
						<span className="project--highlight">1.54x faster</span> than Perl 5.42.2.
					</>,
				]}
				github={'https://github.com/sathwikv2005/Helium'}
				skills={
					<>
						<Skill.C />
						<Skill.CompilerDesign />
						<Skill.VirtualMachine />
						<Skill.GarbageCollection />
					</>
				}
				img={'/lox.png'}
			/>

			<Project
				title={'Better VTOP'}
				des={[
					<>
						Built a student companion app for VIT-AP’s VTOP portal with a cleaner mobile-first
						experience.
					</>,
					<>
						Implemented <span className="project--highlight">authenticated session handling</span>,{' '}
						<span className="project--highlight">HTML parsing</span>, and secure file downloads.
					</>,
					<>
						<span className="project--highlight">Reverse-engineered portal APIs</span> to extract
						and structure attendance, timetable, and academic data.
					</>,
					<>
						Deployed backend services on{' '}
						<span className="project--highlight">OCI Linux servers</span> and actively used by{' '}
						<span className="project--highlight">50+ students.</span>
					</>,
				]}
				github={'https://github.com/sathwikv2005/BetterVTOP-VITAP'}
				skills={
					<>
						<Skill.ReactNative />
						<Skill.Node />
						<Skill.Android />
						<Skill.Apple />
						<Skill.WebScraping />
					</>
				}
				img={'/betterVTOP.png'}
			/>

			<Project
				title={'Ripost'}
				des={[
					<>
						Developed a <span className="project--highlight">real-time multiplayer</span> typing
						combat game with latency-sensitive gameplay.
					</>,
					<>
						Built synchronized <span className="project--highlight">damage systems</span> and{' '}
						<span className="project--highlight">combo multipliers.</span>
					</>,
					<>
						<span className="project--highlight">Deployed</span> scalable multiplayer backend
						services on <span className="project--highlight">OCI Linux servers.</span>
					</>,
				]}
				github={'https://github.com/sathwikv2005/Ripost'}
				live={'https://ripost.sathwik.xyz'}
				skills={
					<>
						<Skill.React />
						<Skill.Node />
						<Skill.Express />
						<Skill.TypeScript />
						<Skill.HTMLCSS />
					</>
				}
				img={'/ripost.png'}
			/>

			<Project
				title={'Small URL'}
				des={[
					<>
						Built a <span className="project--highlight">full-stack URL shortening platform</span>{' '}
						with redirect handling and <span className="project--highlight">analytics.</span>
					</>,
					<>
						Implemented <span className="project--highlight">REST APIs</span> and visit tracking
						with device/IP metadata storage.
					</>,
					<>
						Integrated <span className="project--highlight">authentication</span> and{' '}
						<span className="project--highlight">scalable</span> link management using React,
						Express.js, and MongoDB.
					</>,
				]}
				github={'https://github.com/sathwikv2005/smallURL'}
				live={'https://smallurl.sathwik.xyz'}
				skills={
					<>
						<Skill.React />
						<Skill.Node />
						<Skill.Express />
						<Skill.Mongo />
						<Skill.JavaScript />
						<Skill.HTMLCSS />
					</>
				}
				img={'/smallurl.png'}
			/>

			<Project
				title={'Tic Tac Toe'}
				des={[
					<>
						Built a <span className="project--highlight">real-time multiplayer</span> Tic Tac Toe
						game using Socket.io and WebSockets.
					</>,
					<>
						Implemented <span className="project--highlight">room-based matchmaking</span> and live
						move synchronization between players.
					</>,
					<>
						Developed backend services with Node.js and Express for multiplayer{' '}
						<span className="project--highlight">session handling.</span>
					</>,
				]}
				github={'https://github.com/sathwikv2005/Tic-Tac-Toe'}
				live={'https://tictactoe.sathwik.xyz'}
				skills={
					<>
						<Skill.Node />
						<Skill.Express />
						<Skill.SocketIO />
						<Skill.Mongo />
						<Skill.JavaScript />
						<Skill.HTMLCSS />
					</>
				}
				img={'/tictactoe.png'}
			/>

			<div
				className="home--github"
				onClick={() =>
					window.open('https://github.com/sathwikv2005', '_blank', 'noopener,noreferrer')
				}
			>
				More on my GitHub <FaExternalLinkAlt />
			</div>
		</div>
	)
}
