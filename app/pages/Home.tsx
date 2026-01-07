import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ValueProps } from "../components/ValueProps";
import { HowItWorks } from "../components/HowItWorks";
import { WhyItWorks } from "../components/WhyItWorks";
import { Footer } from "../components/Footer";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden selection:bg-primary/30">
			<Navbar />
			<main>
				<Hero />
				<ValueProps />
				<HowItWorks />
				<WhyItWorks />
			</main>
			<Footer />
		</div>
	);
}
