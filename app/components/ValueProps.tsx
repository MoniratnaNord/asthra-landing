import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Scale } from "lucide-react";

const features = [
	{
		icon: ShieldCheck,
		title: "No price exposure",
		description:
			"Your capital remains protected from market volatility through mathematically balanced positions.",
		gradient: "",
	},
	{
		icon: TrendingUp,
		title: "No speculative leverage",
		description:
			"Clean, capital-efficient strategies without the risks of traditional leveraged trading.",
		gradient: "",
	},
	{
		icon: Scale,
		title: "Market-structure yield",
		description:
			"Capture consistent returns from funding rates and basis convergence mechanics.",
		gradient: "",
	},
];

export function ValueProps() {
	return (
		<section id="strategies" className="py-24 bg-secondary/20 relative">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
						Yield without the{" "}
						<span className="text-[#ffc300]">Directional Risk</span>
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						We isolate yield from price action, allowing you to earn regardless
						of whether the market goes up, down, or sideways.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group glass-card rounded-3xl p-8 relative overflow-hidden hover:-translate-y-2 transition-transform duration-300"
						>
							<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />

							<div className="w-14 h-14 rounded-2xl bg-[#ffc300] border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/30 transition-colors">
								<feature.icon className="w-7 h-7 text-black" />
							</div>

							<h3 className="text-xl font-bold mb-3">{feature.title}</h3>
							<p className="text-muted-foreground leading-relaxed">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
