import { FaJava, FaNodeJs } from 'react-icons/fa6'
import { FaReact, FaJsSquare, FaPython } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiCplusplus } from 'react-icons/si'
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi'
import * as Skill from '../skill/Skill'

export default function TechStack() {
	return (
		<div className="home--techstack">
			<Skill.React />
			<Skill.Node />
			<Skill.Express />
			<Skill.Mongo />
			<Skill.SQL />
			<Skill.TypeScript />
			<Skill.JavaScript />
			<Skill.Cpp />
			<Skill.Python />
			<Skill.Java />
		</div>
	)
}
