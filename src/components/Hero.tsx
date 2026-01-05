import { ArrowRight, TrendingUp } from "lucide-react";
import logo from "../assets/logoremove.png";
export default function Hero() {
	return (
		<div className="relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>

			<nav className="relative z-10 container mx-auto px-6 py-6">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						{/* <TrendingUp className="w-8 h-8 text-blue-500" /> */}
						<img src={logo} width={120} height={100} />
						{/* <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Asthra
						</span> */}
					</div>

					<div className="hidden md:flex items-center space-x-8">
						<a
							href="#features"
							className="text-gray-300 hover:text-white transition-colors"
						>
							How It Works
						</a>
						<a
							href="#platform"
							className="text-gray-300 hover:text-white transition-colors"
						>
							Why It Works
						</a>
						{/* <a
							href="#about"
							className="text-gray-300 hover:text-white transition-colors"
						>
							About
						</a> */}
						<button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
							Coming Soon
						</button>
					</div>
				</div>
			</nav>

			<div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
				<div className="max-w-4xl mx-auto text-center">
					{/* <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-8">
						<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
						<span className="text-sm text-gray-300">
							Fund Asthra
						</span>
					</div> */}

					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						Market-Neutral Yield
						<span className="text-xl block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
							Without Trading. Without Directional Risk.
						</span>
					</h1>

					<p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
						Deploy funds into automated delta-neutral strategies designed to
						capture funding and basis across all market conditions.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
						<button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105">
							<span>Coming Soon</span>
							<ArrowRight className="w-5 h-5" />
						</button>
						{/* <button className="w-full sm:w-auto px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg font-semibold hover:bg-gray-700 transition-all">
							Watch Demo
						</button> */}
					</div>

					{/* <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
						<div>
							<div className="text-3xl font-bold text-blue-400">$2.5B+</div>
							<div className="text-sm text-gray-400 mt-1">Trading Volume</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-purple-400">500K+</div>
							<div className="text-sm text-gray-400 mt-1">Active Users</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-pink-400">50+</div>
							<div className="text-sm text-gray-400 mt-1">Exchanges</div>
						</div>
					</div> */}
				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
		</div>
	);
}
