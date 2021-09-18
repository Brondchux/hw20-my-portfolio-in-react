import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			{/* <!-- Header Section --> */}
			<Header />

			{/* <!-- Main Section --> */}
			<main>
				<About />
				<Portfolio />
				<Contact />
			</main>

			{/* <!-- Footer Section --> */}
			<Footer />
		</>
	);
}

export default App;
