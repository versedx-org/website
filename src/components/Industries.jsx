import './Industries.css'

const industries = [
	{
		name: 'Manufacturing',
		description: 'Smart factories, production optimization, and predictive maintenance',
		icon: '🏭',
	},
	{
		name: 'Architecture & Construction',
		description: 'BIM visualization, design collaboration, and project simulation',
		icon: '🏗️',
	},
	{
		name: 'Automotive',
		description: 'Vehicle design, autonomous testing, and manufacturing simulation',
		icon: '🚗',
	},
	{
		name: 'Smart Cities',
		description: 'Urban planning, infrastructure monitoring, and traffic optimization',
		icon: '🌆',
	},
	{
		name: 'Media & Entertainment',
		description: 'Virtual production, real-time rendering, and content creation',
		icon: '🎬',
	},
	{
		name: 'Energy & Utilities',
		description: 'Grid simulation, renewable planning, and asset management',
		icon: '⚡',
	},
]

function Industries() {
	return (
		<section className="industries section" id="industries">
			<div className="container">
				<h2 className="section-title">Industries We Serve</h2>
				<p className="section-subtitle">
					Delivering Omniverse solutions across diverse sectors to drive innovation and operational excellence.
				</p>

				<div className="industries-grid">
					{industries.map((industry) => (
						<div key={industry.name} className="industry-card">
							<span className="industry-icon">{industry.icon}</span>
							<h3 className="industry-name">{industry.name}</h3>
							<p className="industry-description">{industry.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Industries
