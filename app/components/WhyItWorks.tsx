import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useCreateSubscriber } from "../hooks/use-subscribers";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Loader2 } from "lucide-react";

export function WhyItWorks() {
	const [email, setEmail] = useState("");
	// const { mutate, isPending } = useCreateSubscriber();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// mutate(
		// 	{ email },
		// 	{
		// 		onSuccess: () => setEmail(""),
		// 	}
		// );
	};

	return (
		<section className="py-24 bg-secondary/40">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
							Built for consistency.
							<br />
							<span className="text-[#ffc300] text-muted-foreground">
								Not speculation.
							</span>
						</h2>

						<div className="space-y-6 mt-8">
							{[
								"Delta-neutral by design",
								"Non-custodial fund flow",
								"Fully automated execution",
								"Transparent yield mechanics",
							].map((item, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
									className="flex items-center gap-4"
								>
									<div className="w-6 h-6 rounded-full bg-[#ffc300] flex items-center justify-center text-primary">
										<CheckCircle2 className="w-4 h-4 text-black" />
									</div>
									<span className="text-lg text-foreground/90">{item}</span>
								</motion.div>
							))}
						</div>
					</div>

					<div className="glass-card p-8 md:p-12 rounded-3xl border-primary/20 bg-secondary/60">
						<h3 className="text-2xl font-bold mb-4">Join the Waitlist</h3>
						<p className="text-muted-foreground mb-8">
							Get early access to our automated delta-neutral strategies.
							Limited spots available for the V2 launch.
						</p>

						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<Input
									type="email"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="bg-black/30 border-white/10 h-12 rounded-xl text-lg focus:ring-primary focus:border-primary"
									required
								/>
							</div>
							<Button
								type="submit"
								// disabled={isPending}
								className="w-full h-12 text-lg rounded-xl bg-[#ffc300] text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20"
							>
								{/* {isPending ? (
									<>
										<Loader2 className="w-5 h-5 mr-2 animate-spin" />
										Joining...
									</>
								) : (
									"Get Early Access"
								)} */}
								"Get Early Access"
							</Button>
						</form>

						<p className="text-xs text-muted-foreground mt-6 text-center">
							By joining, you agree to our Terms of Service and Privacy Policy.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
