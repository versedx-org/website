import './Partnership.css'

const stats = [
	{ number: '10+', label: 'Years Experience' },
	{ number: '150+', label: 'Certified Experts' },
	{ number: '500+', label: 'Projects Delivered' },
	{ number: '99%', label: 'Client Retention' },
]

const capabilities = [
	'NVIDIA Omniverse Enterprise',
	'NVIDIA AI Enterprise',
	'OpenUSD Framework',
	'NVIDIA RTX Technology',
	'CUDA Development',
	'DGX Cloud Platform',
]

function Partnership() {
	return (
		<section className="partnership section" id="partnership">
			<div className="partnership-bg">
				<div className="grid-bg"></div>
			</div>

			<div className="container">
				<div className="partnership-content">
					<div className="partnership-info">
						<div className="partner-badge">
							<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
								<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
							</svg>
							NVIDIA Elite Partner
						</div>

						<h2 className="partnership-title">
							Trusted NVIDIA
							<span className="text-gradient"> Omniverse Partner</span>
						</h2>

						<p className="partnership-description">
							As an NVIDIA Elite Service Delivery Partner, VersedX brings unparalleled
							expertise in Omniverse implementation. Our certified team works directly
							with NVIDIA to deliver cutting-edge solutions that transform your business.
						</p>

						<div className="capabilities">
							<h4 className="capabilities-title">Our Technology Stack</h4>
							<div className="capabilities-grid">
								{capabilities.map((cap) => (
									<div key={cap} className="capability-tag">
										<span className="capability-dot"></span>
										{cap}
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="partnership-stats">
						{stats.map((stat) => (
							<div key={stat.label} className="stat-card">
								<span className="stat-card-number">{stat.number}</span>
								<span className="stat-card-label">{stat.label}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Partnership
