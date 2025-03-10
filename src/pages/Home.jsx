import About from '../components/home/About'
import Contact from '../components/home/Contact'
import Education from '../components/home/Education'
import Header from '../components/home/Header'
import Projects from '../components/home/Projects'
import TechStack from '../components/home/TechStack'

export default function Home() {
	return (
		<div className="home--container">
			<div className="home--hero">
				<Header />
				<div className="hero--body">
					<TechStack />
					<About />
				</div>
			</div>
			<Projects />
			<div className="home--info">
				<Education />
				<Contact />
			</div>
			<div style={{ height: '30vh' }}></div>
		</div>
	)
}
