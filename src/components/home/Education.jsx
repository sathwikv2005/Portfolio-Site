import { FaGraduationCap } from 'react-icons/fa'
export default function Education() {
	return (
		<div className="education--wrapper">
			<div className="education--heading">
				<FaGraduationCap /> Education
			</div>
			<div className="education--timeline">
				<ul>
					<li>
						<div className="education--item">
							<div className="education--item--duration">2023-2027</div>
							<div className="education--item--name">Vellore Institue Of Technology, Amaravati</div>
							<div className="education--item--des">B.Tech CSE with specialization in AI & ML</div>
						</div>
					</li>
					<li>
						<div className="education--item">
							<div className="education--item--duration">2021-2023</div>
							<div className="education--item--name">Sri Chaitanya</div>
							<div className="education--item--des">High School</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}
