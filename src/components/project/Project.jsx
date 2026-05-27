import { FaGlobe } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'

export default function Project({ title, des, github, live, skills, img }) {
	return (
		<div className="home--project">
			<div className="home--project--details">
				<a target="blank" href={live || github}>
					<div className="project--title hover">{title}</div>
				</a>
				<ul className="project--des">
					{des.map((point, index) => (
						<li key={index}>{point}</li>
					))}
				</ul>
				<div className="project--techstack home--techstack">{skills}</div>
				<div className="project--btns">
					<a target="blank" href={github}>
						<FaGithub className="project--btn hover" />
					</a>

					{live && (
						<a target="blank" href={live}>
							<FaGlobe className="project--btn hover" />
						</a>
					)}
				</div>
			</div>
			<img
				src={img}
				onClick={() => {
					window.open(live || github, '_blank', 'noopener,noreferrer')
				}}
				className="home--project--img hover"
			/>
		</div>
	)
}
