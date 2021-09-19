import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	const [activePage, setActivePage] = useState("About");
	const displayPage = (pageName) => {
		switch (pageName) {
			case "About":
				return <About />;
			case "Portfolio":
				return <Portfolio />;
			default:
				return <Contact />;
		}
	};
	const changeViewPage = (newPage) => {
		return setActivePage(newPage);
	};
	return (
		<div>
			{/* <!-- Header Section --> */}
			<Header activePage={activePage} changeViewPage={changeViewPage} />

			{/* <!-- Main Section --> */}
			<main>{displayPage(activePage)}</main>

			{/* <!-- Footer Section --> */}
			<Footer />
		</div>
	);
}

export default App;
