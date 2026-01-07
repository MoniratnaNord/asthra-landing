import { motion } from "framer-motion";
import { Wallet, Coins, BarChart3, Settings2, ArrowRight } from "lucide-react";

const steps = [
	{
		icon: Wallet,
		title: "Connect Wallet",
		description:
			"Web3 wallet connect + optional KYC modal depending on service.",
	},
	{
		icon: Coins,
		title: "Deposit Assets",
		description: "Supply assets to HL and/or Lighter protocols.",
	},
	{
		icon: Settings2,
		title: "Choose Strategy",
		description: "Select delta-neutral, fixed spread, or target yield.",
	},
	{
		icon: BarChart3,
		title: "Monitor & Adjust",
		description: "See positions, funding, risk metrics live.",
	},
];

export function HowItWorks() {
	return (
		<section id="how-it-works" className="py-24 relative overflow-hidden">
			{/* Background Grid */}
			<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

			<div className="container mx-auto px-4 md:px-6">
				<div className="mb-16">
					<span className="text-primary font-mono text-sm tracking-wider uppercase">
						Process
					</span>
					<h2 className="text-3xl md:text-5xl font-display font-bold mt-2">
						How It <span className="text-[#ffc300]">Works</span>
					</h2>
				</div>

				<div className="relative">
					{/* Connecting Line (Desktop) */}
					<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-primary/20" />

					<div className="grid md:grid-cols-4 gap-8 md:gap-4">
						{steps.map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="relative pt-4 md:pt-8"
							>
								{/* Step Number Bubble */}
								<div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#ffc300] border border-primary text-black font-mono font-bold flex items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
									{index + 1}
								</div>

								<div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm h-full mt-4 md:mt-0">
									<div className=" mb-4 text-primary">
										<step.icon className="w-8 h-8" />
									</div>
									<h3 className="text-lg font-bold mb-2">{step.title}</h3>
									<p className="text-[#ffc300] text-sm text-muted-foreground">
										{step.description}
									</p>
								</div>

								{/* Mobile Arrow */}
								{index < steps.length - 1 && (
									<div className="md:hidden flex justify-center py-4 text-white/20">
										<ArrowRight className="w-6 h-6 rotate-90" />
									</div>
								)}
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
