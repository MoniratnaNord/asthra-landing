import banner from "../assets/banner_logo.png";
export default function Platform() {
	return (
		<div id="platform" className="container mx-auto px-6 py-24">
			<div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
				<div className="grid grid-cols-2 p-8 md:p-16">
					<div className="items-center">
						<h2 className="flex flex-col items-start text-4xl md:text-5xl font-bold mb-10">
							{/* Why It Works */}
							<span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
								{/* Professional Traders */}Why It Works
							</span>
						</h2>
						{/* <p className="text-gray-400 text-lg mb-8 leading-relaxed">
							Experience the most advanced trading interface with customizable
							layouts, real-time data feeds, and professional charting tools.
							Trade with confidence using our institutional-grade platform.
						</p> */}

						<div className="space-y-4 mb-8">
							<div className="flex items-start space-x-3">
								<div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								</div>
								<div>
									<div className="font-semibold text-white">
										Delta-neutral by design
									</div>
									<div className="text-gray-400 text-sm">
										{/* Drag and drop layouts tailored to your trading style */}
									</div>
								</div>
							</div>

							<div className="flex items-start space-x-3">
								<div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								</div>
								<div>
									<div className="font-semibold text-white">
										Non-custodial fund flow
									</div>
									<div className="text-gray-400 text-sm">
										{/* 100+ technical indicators and drawing tools */}
									</div>
								</div>
							</div>

							<div className="flex items-start space-x-3">
								<div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								</div>
								<div>
									<div className="font-semibold text-white">
										Fully automated execution
									</div>
									<div className="text-gray-400 text-sm">
										{/* Build custom bots and automated strategies */}
									</div>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								</div>
								<div>
									<div className="font-semibold text-white">
										Transparent yield mechanics
									</div>
									<div className="text-gray-400 text-sm">
										{/* Build custom bots and automated strategies */}
									</div>
								</div>
							</div>
						</div>

						<button className="px-8 py-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105">
							Built for consistency. Not speculation.
						</button>
					</div>

					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-3xl opacity-30"></div>
						<div className="relative bg-gray-900 border border-gray-700 rounded-xl p-10 shadow-2xl">
							{/* <div className="flex items-center space-x-2 mb-4">
								<div className="flex space-x-1">
									<div className="w-3 h-3 bg-red-500 rounded-full"></div>
									<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
									<div className="w-3 h-3 bg-green-500 rounded-full"></div>
								</div>
								<div className="flex-1 bg-gray-800 rounded px-3 py-1 text-xs text-gray-400">
									trade.fi/terminal
								</div>
							</div>

							<div className="space-y-3">
								<div className="bg-gray-800 rounded-lg p-4">
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm text-gray-400">BTC/USDT</span>
										<span className="text-green-400 text-sm">+2.45%</span>
									</div>
									<div className="text-2xl font-bold text-white mb-1">
										$45,234.56
									</div>
									<div className="h-16 flex items-end space-x-1">
										{[40, 65, 45, 80, 60, 90, 70, 85, 75, 95, 88, 100].map(
											(height, i) => (
												<div
													key={i}
													className="flex-1 bg-gradient-to-t from-green-600 to-green-400 rounded-t"
													style={{ height: `${height}%` }}
												></div>
											)
										)}
									</div>
								</div>

								<div className="grid grid-cols-2 gap-3">
									<div className="bg-gray-800 rounded-lg p-4">
										<div className="text-xs text-gray-400 mb-1">24h Volume</div>
										<div className="text-lg font-semibold text-white">
											$2.4B
										</div>
									</div>
									<div className="bg-gray-800 rounded-lg p-4">
										<div className="text-xs text-gray-400 mb-1">Market Cap</div>
										<div className="text-lg font-semibold text-white">
											$850B
										</div>
									</div>
								</div>

								<div className="flex space-x-3">
									<button className="flex-1 bg-green-600 hover:bg-green-700 rounded-lg py-3 font-semibold transition-colors">
										Buy
									</button>
									<button className="flex-1 bg-red-600 hover:bg-red-700 rounded-lg py-3 font-semibold transition-colors">
										Sell
									</button>
								</div>
							</div> */}
							<div>
								<img src={banner} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
