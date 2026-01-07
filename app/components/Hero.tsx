import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, PlayCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export function Hero() {
	return (
		<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
			{/* Background Elements */}
			{/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" /> */}
			{/* <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" /> */}

			<div className="container mx-auto px-4 md:px-6 relative z-10">
				<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
					{/* <motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
					>
						<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
						<span className="text-xs font-mono text-primary uppercase tracking-wider">
							V2 Protocol Live
						</span>
					</motion.div> */}

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-8"
					>
						Market-Neutral
						<br />
						<span className="text-[#ffc300]">Yield Generation</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
					>
						Without Trading. Without Directional Risk. Deploy funds into
						automated delta-neutral strategies designed to capture funding and
						basis across all market conditions.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
					>
						{/* <Button
							size="lg"
							className="w-full sm:w-auto h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-lg font-semibold shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300"
						>
							Coming Soon <ArrowRight className="ml-2 w-5 h-5" />
						</Button> */}
						{/* <Button
							size="lg"
							variant="outline"
							className="w-full sm:w-auto h-14 px-8 border-white/10 hover:bg-white/5 text-foreground rounded-full text-lg backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
						>
							Read Docs <ChevronRight className="ml-2 w-4 h-4" />
						</Button> */}
					</motion.div>

					{/* Stats Banner */}
					{/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/5 pt-10"
          >
            <div>
              <div className="text-3xl md:text-4xl font-mono font-bold text-white mb-1">
                $142M
              </div>
              <div className="text-sm text-muted-foreground">Total Value Locked</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-mono font-bold text-primary mb-1">
                12.4%
              </div>
              <div className="text-sm text-muted-foreground">Average APY</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-mono font-bold text-white mb-1">
                0
              </div>
              <div className="text-sm text-muted-foreground">Liquidation Events</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-mono font-bold text-white mb-1">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Automated Balancing</div>
            </div>
          </motion.div> */}
				</div>
			</div>
		</section>
	);
}
