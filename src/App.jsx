import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FooterLayout from './layout/FooterLayout'

function App() {
	return (
		<Routes>
			<Route path="/" element={<FooterLayout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	)
}

export default App
