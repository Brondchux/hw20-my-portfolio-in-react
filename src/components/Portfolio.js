import "./Portfolio.css";
import parkerApp from "../assets/images/parker-app.png";
import techBlog from "../assets/images/tech-blog.png";
import owinpicsMedalists from "../assets/images/owinpics-medalists.png";
import weatherDashboard from "../assets/images/weather-dashboard.png";
import codeQuiz from "../assets/images/code-quiz.png";

function Portfolio() {
	return (
		<section id="portfolio">
			<div className="article-heading">
				<h3>Portfolio</h3>
			</div>
			<div className="article-content">
				<article>
					<h2>Work Experience</h2>
					<p>
						Below are projects I've contributed to, both as a team member and as
						the sole engineer in order of the most recent first.
					</p>
					<div id="portfolio-images">
						<figure data-recent="recent-project">
							<a
								href="https://parker-live.herokuapp.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={parkerApp}
									alt="portfolio screenshot of parker parking application"
								/>
								<figcaption>
									Screenshot of parker parking project
									<br />
									<div>
										<a
											href="https://github.com/zanamama/parker"
											target="_blank"
											rel="noreferrer"
										>
											<i className="fab fa-github"></i> Preview repo in Github
										</a>
									</div>
								</figcaption>
							</a>
						</figure>
						<figure>
							<a
								href="https://csalhab.github.io/olympics-usa-medals-and-medalist-news/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={owinpicsMedalists}
									alt="portfolio screenshot of owinpics-medalists application"
								/>
								<figcaption>
									Screenshot of owinpics medalists project <br />
									<div>
										<a
											href="https://github.com/csalhab/olympics-usa-medals-and-medalist-news"
											target="_blank"
											rel="noreferrer"
										>
											<i className="fab fa-github"></i> Preview repo in Github
										</a>
									</div>
								</figcaption>
							</a>
						</figure>
						<figure>
							<a
								href="https://brondchux.github.io/hw6-weather-dashboard/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={weatherDashboard}
									alt="portfolio screenshot of weather-dashboard application"
								/>
								<figcaption>
									Screenshot of weather dashboard project
									<div>
										<a
											href="https://github.com/Brondchux/hw6-weather-dashboard"
											target="_blank"
											rel="noreferrer"
										>
											<i className="fab fa-github"></i> Preview repo in Github
										</a>
									</div>
								</figcaption>
							</a>
						</figure>
						<figure>
							<a
								href="https://brondchux.github.io/hw4-code-quiz/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={codeQuiz}
									alt="portfolio screenshot of code-quiz web application"
								/>
								<figcaption>
									Screenshot of code quiz project
									<div>
										<a
											href="https://github.com/Brondchux/hw4-code-quiz"
											target="_blank"
											rel="noreferrer"
										>
											<i className="fab fa-github"></i> Preview repo in Github
										</a>
									</div>
								</figcaption>
							</a>
						</figure>
						<figure>
							<a
								href="https://live-hw12-tech-blog.herokuapp.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={techBlog}
									alt="portfolio screenshot of technology blog application"
								/>
								<figcaption>
									Screenshot of tech blog project
									<br />
									<div>
										<a
											href="https://github.com/Brondchux/hw12-tech-blog"
											target="_blank"
											rel="noreferrer"
										>
											<i className="fab fa-github"></i> Preview repo in Github
										</a>
									</div>
								</figcaption>
							</a>
						</figure>
					</div>
				</article>
			</div>
		</section>
	);
}

export default Portfolio;
