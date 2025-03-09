import { FaHtml5, FaJava, FaNodeJs } from 'react-icons/fa6'
import { FaReact, FaJsSquare, FaPython } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiCplusplus } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'

export default function TechStack() {
	return (
		<div className="home--techstack">
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
				<BiLogoPostgresql color="#30648c" className="home--skill--icon" />
				SQL
			</div>
			<div className="home--skill hover shinny">
				<FaJsSquare color="#f7df1d" className="home--skill--icon" />
				Java Script
			</div>
			<div className="home--skill hover shinny">
				<SiCplusplus color="#088ad5" className="home--skill--icon" />
				C++
			</div>
			<div className="home--skill hover shinny">
				<FaPython color="#356e9b" className="home--skill--icon" />
				Python
			</div>
			<div className="home--skill hover shinny">
				<FaJava color="#f45a3c" className="home--skill--icon" />
				Java
			</div>
			<div className="home--skill hover shinny">
				<FaHtml5 color="#e54d26" className="home--skill--icon" />
				HTML, CSS
			</div>
		</div>
	)
}
