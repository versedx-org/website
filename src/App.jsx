import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Industries from './components/Industries'
import Partnership from './components/Partnership'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	return (
		<div className={`app ${isLoaded ? 'loaded' : ''}`}>
			<Navbar />
			<main>
				<Hero />
				<Services />
				<Industries />
				<Partnership />
				<CaseStudies />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}

export default App
