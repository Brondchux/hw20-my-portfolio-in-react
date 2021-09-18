import "./Contact.css";

function Contact() {
	return (
		<section id="contact-me">
			<div className="article-heading">
				<h3>Contact Me</h3>
			</div>
			<div className="article-content">
				<article>
					<h2>Let's Connect!</h2>
					<p>
						Thank you for making it down to this section of my portfolio. If you
						can, I'll like us to connect. You can reach me via the following
					</p>
					<ul>
						<li>
							<i className="fas fa-phone-alt"></i>
							<a href="tel:+19178542196">+1 (917) 854-2196</a>
						</li>
						<li>
							<i className="fas fa-envelope"></i>
							<a href="mailto:hello@gospelchukwu.com">hello@gospelchukwu.com</a>
						</li>
						<li>
							<i className="fas fa-globe"></i>
							<a
								href="https://gospelchukwu.com/"
								target="_blank"
								rel="noreferrer"
							>
								gospelchukwu.com
							</a>
						</li>
						<li>
							<i className="fab fa-github"></i>
							<a
								href="https://github.com/Brondchux"
								target="_blank"
								rel="noreferrer"
							>
								github.com/Brondchux
							</a>
						</li>
						<li>
							<i className="fab fa-linkedin"></i>
							<a
								href="https://www.linkedin.com/in/gospelchukwu/"
								target="_blank"
								rel="noreferrer"
							>
								linkedin.com/in/gospelchukwu/
							</a>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
}

export default Contact;
