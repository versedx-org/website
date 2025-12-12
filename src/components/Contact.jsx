import { useState } from 'react'
import './Contact.css'

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsSubmitting(true)

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false)
			setSubmitted(true)
			setFormData({ name: '', email: '', company: '', message: '' })
		}, 1500)
	}

	return (
		<section className="contact section" id="contact">
			<div className="contact-bg">
				<div className="gradient-orb gradient-orb-green contact-orb-1"></div>
				<div className="gradient-orb gradient-orb-cyan contact-orb-2"></div>
			</div>

			<div className="container">
				<div className="contact-content">
					<div className="contact-info">
						<h2 className="contact-title">
							Let's Build Your
							<span className="text-gradient"> Digital Future</span>
						</h2>

						<p className="contact-description">
							Ready to transform your business with NVIDIA Omniverse?
							Our experts are here to guide you every step of the way.
						</p>

						<div className="contact-details">
							<div className="contact-item">
								<div className="contact-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
										<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
										<polyline points="22,6 12,13 2,6" />
									</svg>
								</div>
								<div>
									<span className="contact-label">Email</span>
									<a href="mailto:hello@versedx.com">hello@versedx.com</a>
								</div>
							</div>

							<div className="contact-item">
								<div className="contact-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
										<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
									</svg>
								</div>
								<div>
									<span className="contact-label">Phone</span>
									<a href="tel:+1-800-VERSEDX">+1-800-VERSEDX</a>
								</div>
							</div>

							<div className="contact-item">
								<div className="contact-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
										<circle cx="12" cy="10" r="3" />
									</svg>
								</div>
								<div>
									<span className="contact-label">Headquarters</span>
									<span>San Francisco, CA</span>
								</div>
							</div>
						</div>
					</div>

					<div className="contact-form-wrapper">
						{submitted ? (
							<div className="form-success">
								<div className="success-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
										<polyline points="22 4 12 14.01 9 11.01" />
									</svg>
								</div>
								<h3>Thank You!</h3>
								<p>We'll get back to you within 24 hours.</p>
								<button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
									Send Another Message
								</button>
							</div>
						) : (
							<form className="contact-form" onSubmit={handleSubmit}>
								<div className="form-group">
									<label htmlFor="name">Full Name</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										placeholder="John Smith"
									/>
								</div>

								<div className="form-group">
									<label htmlFor="email">Email Address</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										placeholder="john@company.com"
									/>
								</div>

								<div className="form-group">
									<label htmlFor="company">Company</label>
									<input
										type="text"
										id="company"
										name="company"
										value={formData.company}
										onChange={handleChange}
										placeholder="Your Company"
									/>
								</div>

								<div className="form-group">
									<label htmlFor="message">How can we help?</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows="4"
										placeholder="Tell us about your project..."
									/>
								</div>

								<button
									type="submit"
									className={`btn btn-primary form-submit ${isSubmitting ? 'loading' : ''}`}
									disabled={isSubmitting}
								>
									{isSubmitting ? 'Sending...' : 'Send Message'}
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
