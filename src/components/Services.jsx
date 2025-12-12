import './Services.css'

const services = [
	{
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
				<polyline points="3.27 6.96 12 12.01 20.73 6.96" />
				<line x1="12" y1="22.08" x2="12" y2="12" />
			</svg>
		),
		title: 'Digital Twins',
		description: 'Create real-time, physically accurate digital replicas of your facilities, products, and processes for simulation and optimization.',
	},
	{
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
				<circle cx="12" cy="12" r="10" />
				<path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
			</svg>
		),
		title: '3D Simulation',
		description: 'Advanced virtual prototyping and simulation environments for testing, validating, and optimizing designs before physical production.',
	},
	{
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M12 2L2 7l10 5 10-5-10-5z" />
				<path d="M2 17l10 5 10-5" />
				<path d="M2 12l10 5 10-5" />
			</svg>
		),
		title: 'AI Integration',
		description: 'Leverage generative AI and NVIDIA AI Enterprise to automate workflows, enhance decision-making, and accelerate innovation.',
	},
	{
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
				<path d="M8 12h8M12 8v8" />
			</svg>
		),
		title: 'OpenUSD Pipelines',
		description: 'Unify your 3D workflows with OpenUSD-based pipelines for seamless interoperability across tools and teams.',
	},
	{
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
				<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
				<line x1="3" y1="9" x2="21" y2="9" />
				<line x1="9" y1="21" x2="9" y2="9" />
			</svg>
		),
		title: 'Custom Development',
		description: 'Build tailored Omniverse applications and extensions designed specifically for your unique business requirements.',
	},
	{
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
				<circle cx="9" cy="7" r="4" />
				<path d="M23 21v-2a4 4 0 00-3-3.87" />
				<path d="M16 3.13a4 4 0 010 7.75" />
			</svg>
		),
		title: 'Training & Support',
		description: 'Comprehensive training programs and 24/7 expert support to ensure your team maximizes Omniverse capabilities.',
	},
]

function Services() {
	return (
		<section className="services section" id="services">
			<div className="container">
				<h2 className="section-title">Our Expertise</h2>
				<p className="section-subtitle">
					Comprehensive NVIDIA Omniverse consulting services to accelerate your digital transformation journey.
				</p>

				<div className="services-grid">
					{services.map((service, index) => (
						<div
							key={service.title}
							className="service-card card"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="service-icon">
								{service.icon}
							</div>
							<h3 className="service-title">{service.title}</h3>
							<p className="service-description">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
