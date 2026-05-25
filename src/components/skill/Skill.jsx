import {
	FaJava,
	FaNodeJs,
	FaReact,
	FaJsSquare,
	FaPython,
	FaGlobe,
	FaApple,
	FaGlobeAmericas,
	FaCode,
	FaHtml5,
	FaAndroid,
	FaMemory,
} from 'react-icons/fa'

import { FaComputer } from 'react-icons/fa6'

import { SiExpress, SiMongodb, SiCplusplus, SiSocketdotio } from 'react-icons/si'

import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi'

import { HiMiniCpuChip } from 'react-icons/hi2'

export default function Skill({ icon: Icon, color, name }) {
	return (
		<div className="home--skill hover shinny">
			<Icon color={color} className="home--skill--icon" />
			{name}
		</div>
	)
}

export function React() {
	return <Skill icon={FaReact} color="#61DBFB" name="React" />
}

export function ReactNative() {
	return <Skill icon={FaReact} color="#61DBFB" name="React-Native" />
}

export function Node() {
	return <Skill icon={FaNodeJs} color="#38783b" name="Nodejs" />
}

export function Express() {
	return <Skill icon={SiExpress} name="Express" />
}

export function Mongo() {
	return <Skill icon={SiMongodb} color="#00684a" name="Mongo DB" />
}

export function SQL() {
	return <Skill icon={BiLogoPostgresql} color="#30648c" name="SQL" />
}

export function TypeScript() {
	return <Skill icon={BiLogoTypescript} color="#3178c6" name="Type Script" />
}

export function JavaScript() {
	return <Skill icon={FaJsSquare} color="#f7df1d" name="Java Script" />
}

export function Cpp() {
	return <Skill icon={SiCplusplus} color="#088ad5" name="C++" />
}

export function Python() {
	return <Skill icon={FaPython} color="#356e9b" name="Python" />
}

export function Java() {
	return <Skill icon={FaJava} color="#f45a3c" name="Java" />
}

export function Interpreters() {
	return <Skill icon={FaComputer} name="Interpreters" color="#86D52B" />
}

export function Parsing() {
	return <Skill icon={FaCode} name="Parsing" />
}

export function Android() {
	return <Skill icon={FaAndroid} color="#3DDC84" name="Android" />
}

export function Apple() {
	return <Skill icon={FaApple} color="#ffffff" name="iOS" />
}

export function WebScraping() {
	return <Skill icon={FaGlobeAmericas} color="#ffffff" name="Web Scraping" />
}

export function SocketIO() {
	return <Skill icon={SiSocketdotio} name="Socket.io" />
}

export function HTMLCSS() {
	return <Skill icon={FaHtml5} color="#e54d26" name="HTML, CSS" />
}

export function C() {
	return <Skill icon={SiCplusplus} color="#00599C" name="C Language" />
}

export function CompilerDesign() {
	return <Skill icon={FaCode} name="Compilers" />
}

export function VirtualMachine() {
	return <Skill icon={HiMiniCpuChip} color="#2BD5C7" name="ByteCode VM" />
}

export function GarbageCollection() {
	return <Skill icon={FaMemory} color="#ff9800" name="Memory (GC)" />
}
