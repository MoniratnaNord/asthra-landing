import { Github, Twitter, MessageCircle } from "lucide-react";

export function Footer() {
	return (
		<footer className="border-t border-white/5 py-16 bg-black/40">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid md:flex justify-between gap-12">
					<div className="col-span-2">
						<div className="flex items-center gap-2 mb-4">
							{/* <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold font-mono text-xs">
								A
							</div> */}
							<span className="text-[#ffc300] font-display font-bold text-xl tracking-wide">
								ASTHRA
							</span>
						</div>
						<p className="text-muted-foreground max-w-sm mb-6">
							Automated delta-neutral strategies for sustainable DeFi yield.
							Built on the fastest L2s.
						</p>
						{/* <div className="flex gap-4">
							{[Twitter, Github, MessageCircle].map((Icon, i) => (
								<a
									key={i}
									href="#"
									className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-primary transition-all"
								>
									<Icon className="w-5 h-5" />
								</a>
							))}
						</div> */}
					</div>

					{/* <div>
						<h4 className="font-bold mb-6">Protocol</h4>
						<ul className="space-y-3 text-muted-foreground">
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Strategies
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Analytics
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Documentation
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Security
								</a>
							</li>
						</ul>
					</div> */}

					{/* <div>
						<h4 className="font-bold mb-6">Legal</h4>
						<ul className="space-y-3 text-muted-foreground">
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Terms of Service
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Risks
								</a>
							</li>
						</ul>
					</div> */}
					<div className="mt-16 text-sm text-muted-foreground">
						© {new Date().getFullYear()} Asthra. All rights reserved.
					</div>
				</div>

				{/* <div className="mt-16 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
					© {new Date().getFullYear()} Asthra. All rights reserved.
				</div> */}
			</div>
		</footer>
	);
}
