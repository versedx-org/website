import './Hero.css'

function Hero() {
	return (
		<section className="hero" id="hero">
			<div className="hero-bg">
				<div className="grid-bg"></div>
				<div className="gradient-orb gradient-orb-green hero-orb-1"></div>
				<div className="gradient-orb gradient-orb-cyan hero-orb-2"></div>
			</div>

			<div className="container hero-container">
				<div className="hero-content">
					<div className="hero-badge">
						<span className="badge-dot"></span>
						NVIDIA Omniverse Partner
					</div>

					<h1 className="hero-title">
						Transform Your
						<span className="text-gradient"> Digital Future</span>
						<br />with NVIDIA Omniverse
					</h1>

					<p className="hero-description">
						VersedX delivers expert consulting services for digital twins,
						3D simulation, and enterprise metaverse solutions powered by
						NVIDIA Omniverse technology.
					</p>

					<div className="hero-actions">
						<a href="#contact" className="btn btn-primary">
							Start Your Journey
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</a>
						<a href="#services" className="btn btn-secondary">
							Explore Services
						</a>
					</div>

					<div className="hero-stats">
						<div className="hero-stat">
							<span className="stat-number">50+</span>
							<span className="stat-label">Enterprise Projects</span>
						</div>
						<div className="hero-stat">
							<span className="stat-number">98%</span>
							<span className="stat-label">Client Satisfaction</span>
						</div>
						<div className="hero-stat">
							<span className="stat-number">24/7</span>
							<span className="stat-label">Expert Support</span>
						</div>
					</div>
				</div>

				<div className="hero-visual">
					<div className="hero-visual-inner">
						<div className="visual-cube">
							<div className="cube-face front"></div>
							<div className="cube-face back"></div>
							<div className="cube-face left"></div>
							<div className="cube-face right"></div>
							<div className="cube-face top"></div>
							<div className="cube-face bottom"></div>
						</div>
					</div>
				</div>
			</div>

			<div className="hero-scroll">
				<span>Scroll to explore</span>
				<div className="scroll-indicator">
					<div className="scroll-dot"></div>
				</div>
			</div>
		</section>
	)
}

export default Hero
