import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navLinks = [
		{ name: 'Services', href: '#services' },
		{ name: 'Industries', href: '#industries' },
		{ name: 'Partnership', href: '#partnership' },
		{ name: 'Case Studies', href: '#case-studies' },
		{ name: 'Contact', href: '#contact' },
	]

	return (
		<nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
			<div className="container navbar-container">
				<a href="#" className="navbar-logo">
					<span className="logo-text">Versed</span>
					<span className="logo-accent">X</span>
				</a>

				<div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="navbar-link"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							{link.name}
						</a>
					))}
					<a href="#contact" className="btn btn-primary navbar-cta">
						Get Started
					</a>
				</div>

				<button
					className={`navbar-toggle ${isMobileMenuOpen ? 'open' : ''}`}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle menu"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</nav>
	)
}

export default Navbar
