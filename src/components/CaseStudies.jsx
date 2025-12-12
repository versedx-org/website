import { useState } from 'react'
import './CaseStudies.css'

const caseStudies = [
	{
		title: 'Global Manufacturing Digital Twin',
		client: 'Fortune 500 Automotive',
		industry: 'Manufacturing',
		description: 'Implemented a comprehensive digital twin solution for 12 manufacturing facilities, enabling real-time monitoring and predictive maintenance.',
		results: ['40% reduction in downtime', '25% faster production cycles', '$15M annual savings'],
		image: 'manufacturing',
	},
	{
		title: 'Smart City Infrastructure',
		client: 'Metropolitan Government',
		industry: 'Smart Cities',
		description: 'Developed an urban digital twin for traffic optimization and infrastructure planning serving 5 million residents.',
		results: ['30% traffic congestion reduction', '20% energy savings', 'Real-time incident response'],
		image: 'smartcity',
	},
	{
		title: 'Virtual Production Studio',
		client: 'Major Film Studio',
		industry: 'Media & Entertainment',
		description: 'Built a state-of-the-art virtual production environment for real-time filmmaking and visualization.',
		results: ['60% reduction in post-production', '3x faster iteration cycles', 'Award-winning content'],
		image: 'entertainment',
	},
]

function CaseStudies() {
	const [activeIndex, setActiveIndex] = useState(0)

	const nextSlide = () => {
		setActiveIndex((prev) => (prev + 1) % caseStudies.length)
	}

	const prevSlide = () => {
		setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
	}

	return (
		<section className="case-studies section" id="case-studies">
			<div className="container">
				<h2 className="section-title">Success Stories</h2>
				<p className="section-subtitle">
					Real-world implementations driving measurable business outcomes.
				</p>

				<div className="case-studies-carousel">
					<div className="carousel-container">
						{caseStudies.map((study, index) => (
							<div
								key={study.title}
								className={`case-study-card ${index === activeIndex ? 'active' : ''}`}
							>
								<div className="case-study-visual">
									<div className={`visual-placeholder ${study.image}`}>
										<div className="visual-grid"></div>
										<div className="visual-glow"></div>
									</div>
								</div>

								<div className="case-study-content">
									<span className="case-study-industry">{study.industry}</span>
									<h3 className="case-study-title">{study.title}</h3>
									<p className="case-study-client">Client: {study.client}</p>
									<p className="case-study-description">{study.description}</p>

									<div className="case-study-results">
										<h4>Key Results</h4>
										<ul>
											{study.results.map((result) => (
												<li key={result}>
													<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
														<polyline points="20 6 9 17 4 12" />
													</svg>
													{result}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="carousel-controls">
						<button className="carousel-btn" onClick={prevSlide} aria-label="Previous">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<polyline points="15 18 9 12 15 6" />
							</svg>
						</button>

						<div className="carousel-dots">
							{caseStudies.map((_, index) => (
								<button
									key={index}
									className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
									onClick={() => setActiveIndex(index)}
									aria-label={`Go to slide ${index + 1}`}
								/>
							))}
						</div>

						<button className="carousel-btn" onClick={nextSlide} aria-label="Next">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<polyline points="9 18 15 12 9 6" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CaseStudies
