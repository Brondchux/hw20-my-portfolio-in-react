import "./Header.css";
import gospelchukwu from "../assets/images/gospel-chukwu.jpg";

function Header({ activePage, changeViewPage }) {
	return (
		<header>
			<div
				style={{ backgroundImage: `url(${gospelchukwu})` }}
				title="Gospel Chukwu as of July 2021"
			></div>
			<nav>
				<ul>
					<li>
						<a
							href="##"
							onClick={() => changeViewPage("About")}
							className={activePage === "About" ? "active-page" : ""}
						>
							About
						</a>
					</li>
					<li>
						<a
							href="##"
							onClick={() => changeViewPage("Portfolio")}
							className={activePage === "Portfolio" ? "active-page" : ""}
						>
							Portfolio
						</a>
					</li>
					<li>
						<a
							href="##"
							onClick={() => changeViewPage("Contact")}
							className={activePage === "Contact" ? "active-page" : ""}
						>
							Contact
						</a>
					</li>
					<li>
						<a
							href="https://gospelchukwu.com/doc/Gospel_Chukwu_Resume_012021.pdf"
							target="_blank"
							rel="noreferrer"
						>
							Resume
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
