import { TrendingUp, Twitter, Github, Linkedin, Mail } from "lucide-react";
import logo from "../assets/logoremove.png";
export default function Footer() {
	return (
		<footer className="border-t border-gray-800">
			<div className="container mx-auto px-6 py-16">
				<div className="grid md:grid-cols-4 gap-12 mb-12">
					{/* <div>
						<div className="flex items-center space-x-2 mb-4">
							<TrendingUp className="w-6 h-6 text-blue-500" />
							<span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
								Asthra
							</span>
						</div>
						<p className="text-gray-400 text-sm leading-relaxed">
							Market-Neutral Yield
						</p>
					</div> */}

					{/* <div>
						<h4 className="font-semibold text-white mb-4">Products</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									Trading Terminal
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									Mobile App
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									API Access
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									Trading Bots
								</a>
							</li>
						</ul>
					</div> */}

					{/* <div>
						<h4 className="font-semibold text-white mb-4">Company</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									Careers
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									Press Kit
								</a>
							</li>
						</ul>
					</div> */}

					{/* <div>
						<h4 className="font-semibold text-white mb-4">Support</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									Help Center
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									Contact Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors text-sm"
								>
									Terms of Service
								</a>
							</li>
						</ul>
					</div> */}
				</div>

				<div className="pt-8 border-t border-gray-800">
					<div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
						<div className="text-gray-400 text-sm">
							<div>
								<div className="flex items-center space-x-2 mb-4">
									{/* <TrendingUp className="w-6 h-6 text-blue-500" />
									<span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
										Asthra
									</span> */}
									<img src={logo} width={120} height={100} />
								</div>
								<p className="text-gray-400 text-sm leading-relaxed">
									Market-Neutral Yield
								</p>
							</div>
						</div>

						<div className="flex items-center space-x-6">
							{/* <a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Twitter className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Mail className="w-5 h-5" />
							</a> */}
							© 2026 Asthra. All rights reserved.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
