import {
	Shield,
	Zap,
	BarChart3,
	Users,
	Globe,
	TrendingUp,
	HandCoins,
} from "lucide-react";

export default function Features() {
	const features = [
		{
			icon: Zap,
			title: "Deposit",
			description:
				"Deposit funds on Arbitrum from any wallet. Capital is deployed automatically.",
			color: "text-yellow-400",
		},
		{
			icon: Shield,
			title: "Hedge",
			description:
				"The engine maintains delta neutrality using offsetting spot and perpetual positions.",
			color: "text-blue-400",
		},
		{
			icon: BarChart3,
			title: "Earn",
			description:
				"Yield is generated from funding rates and basis convergence — independent of price direction.",
			color: "text-purple-400",
		},
		{
			icon: HandCoins,
			title: "Withdraw",
			description: "Withdraw anytime. Funds settle back to Arbitrum.",
			color: "text-green-400",
		},
	];

	return (
		<div id="features" className="container mx-auto px-6 py-24">
			<div className="text-center mb-16">
				<h2 className="text-4xl md:text-5xl font-bold mb-4">
					How It Works
					{/* <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Dominate the Markets
          </span> */}
				</h2>
				<p className="text-xl text-gray-400 max-w-2xl mx-auto">
					Professional-grade tools and features designed for both beginners and
					expert traders
				</p>
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
				{features.map((feature, index) => {
					const Icon = feature.icon;
					return (
						<div
							key={index}
							className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all group"
						>
							<div
								className={`w-12 h-12 ${feature.color} bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
							>
								<Icon className={`w-6 h-6 ${feature.color}`} />
							</div>
							<h3 className="text-xl font-semibold mb-3 text-white">
								{feature.title}
							</h3>
							<p className="text-gray-400 leading-relaxed">
								{feature.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
