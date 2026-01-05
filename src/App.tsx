import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Platform from "./components/Platform";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#111111] via-[#2A2E41] to-[#171821] text-white">
			<Hero />
			<Stats />
			<Features />
			<Platform />
			<Footer />
		</div>
	);
}

export default App;
