import { Shield, TrendingDown, Layers } from "lucide-react";

export default function Stats() {
	const stats = [
		{
			label: "No price exposure.",
			icon: Shield,
		},
		{
			label: "No speculative leverage.",
			icon: TrendingDown,
		},
		{
			label: "Just market-structure yield.",
			icon: Layers,
		},
	];

	return (
		<div className="container mx-auto px-6 py-16">
			<h1 className="text-center text-5xl md:text-7xl font-bold mb-6 leading-tight">
				{/* Market-Neutral Yield */}
				<span className="text-4xl block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
					Core Value
				</span>
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
				{stats.map((stat, index) => {
					const Icon = stat.icon;
					return (
						<div
							key={index}
							className="flex flex-col items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
						>
							<div className="flex items-center mb-3">
								<div className="flex h-20 w-20 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
									<Icon size={30} />
								</div>
							</div>
							<div className="text-xl text-gray-400">{stat.label}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
