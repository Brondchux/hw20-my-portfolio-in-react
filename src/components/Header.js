import "./Header.css";

function Header() {
	return (
		<header>
			<div
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL + "/assets/images/gospel-chukwu.jpg"
					})`,
				}}
				title="Gospel Chukwu as of July 2021"
			></div>
			<nav>
				<ul>
					<li>
						<a href="#about-me">About</a>
					</li>
					<li>
						<a href="#portfolio">Portfolio</a>
					</li>
					<li>
						<a href="#contact-me">Contact</a>
					</li>
					<li>
						<a href="https://gospelchukwu.com/doc/Gospel_Chukwu_Resume_012021.pdf">
							Resume
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
