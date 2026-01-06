"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	ArrowRight,
	CheckCircle2,
	Shield,
	Zap,
	TrendingUp,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/logo_removed.png";

export default function Home() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="min-h-screen bg-white">
			<header
				className="sticky top-0 z-50 border-b border-[#FFC300]/20 backdrop-blur-lg transition-all duration-300"
				style={{ backgroundColor: "rgba(28, 2, 50, 0.95)" }}
			>
				<div
					className={`container mx-auto px-4 transition-all duration-300 ${
						isScrolled ? "max-w-4xl" : "max-w-4xl"
					}`}
				>
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center gap-2">
							<div
								className="h-8 w-8 rounded-lg flex items-center justify-center font-bold text-[#1C0232]"
								// style={{ backgroundColor: "#FFC300" }}
							>
								{/* A */}
								<Image src={logo} alt="" />
							</div>
							<span className="font-bold text-xl text-[#FFC300]">Asthra</span>
						</div>

						<nav className="flex items-center gap-6">
							<a
								href="#how-it-works"
								className="text-sm font-medium text-[#ffc300] transition-colors hover:text-[#FFC300]"
							>
								How it works
							</a>
							<a
								href="#why-it-works"
								className="text-sm font-medium text-[#ffc300] transition-colors hover:text-[#FFC300]"
							>
								Why it works
							</a>
						</nav>
					</div>
				</div>
			</header>

			<section
				className="relative overflow-hidden border-b border-[#FFC300]/20"
				style={{ backgroundColor: "#1C0232" }}
			>
				<div className="absolute inset-0 bg-grid-pattern opacity-10" />
				<div className="container relative mx-auto px-4 py-24 lg:py-32">
					<div className="mx-auto max-w-3xl text-center">
						{/* <div
							className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm"
							style={{
								borderColor: "#FFC300",
								backgroundColor: "rgba(255, 195, 0, 0.1)",
							}}
						>
							<div
								className="h-2 w-2 rounded-full animate-pulse"
								style={{ backgroundColor: "#FFC300" }}
							/>
							<span className="text-white/80">Live on Arbitrum</span>
						</div> */}

						<h1 className="mb-6 font-bold text-5xl text-balance tracking-tight lg:text-7xl text-white">
							Market-Neutral
							<span className="text-[#FFC300]"> Yield</span>
						</h1>

						<p
							className="mb-4 text-xl lg:text-2xl"
							style={{ color: "#FFC300" }}
						>
							Without Trading. Without Directional Risk.
						</p>

						<p className="mb-10 max-w-2xl mx-auto text-base leading-relaxed lg:text-lg text-white/80">
							Deploy funds into automated delta-neutral strategies designed to
							capture funding and basis across all market conditions.
						</p>

						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Button
								size="lg"
								className="w-full sm:w-auto group text-[#1C0232] font-semibold hover:opacity-90"
								style={{ backgroundColor: "#FFC300" }}
							>
								Coming Soon
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
							{/* <Button
								size="lg"
								variant="outline"
								className="w-full sm:w-auto bg-transparent text-white border-white/30 hover:bg-white/10"
							>
								View Documentation
							</Button> */}
						</div>
					</div>
				</div>
			</section>

			<section className="border-b border-gray-200 py-20 lg:py-28 bg-white">
				<div className="container mx-auto px-4">
					<div className="mb-16 text-center">
						<h2 className="mb-4 font-bold text-4xl text-balance tracking-tight lg:text-5xl text-black">
							Why Choose Your Lending
						</h2>
						<span>+</span>
						<p className="mx-auto font-bold max-w-2xl text-2xl text-[#ffc300]">
							Perpetual Ecosystem
						</p>
					</div>
					<div className="mx-auto max-w-5xl">
						<div className="grid gap-8 md:grid-cols-3">
							<Card className="group items-center relative overflow-hidden border-gray-200 bg-white p-8 transition-all hover:border-[#FFC300]">
								<div
									className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg"
									style={{ backgroundColor: "#FFC300" }}
								>
									<Shield className="h-6 w-6" style={{ color: "#1C0232" }} />
								</div>
								<h3
									className="mb-2 font-semibold text-lg"
									style={{ color: "#1C0232" }}
								>
									No price exposure
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									Your capital remains protected from market volatility through
									mathematically balanced positions.
								</p>
							</Card>

							<Card className="group items-center relative overflow-hidden border-gray-200 bg-white p-8 transition-all hover:border-[#FFC300]">
								<div
									className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg"
									style={{ backgroundColor: "#FFC300" }}
								>
									<Zap className="h-6 w-6" style={{ color: "#1C0232" }} />
								</div>
								<h3
									className="mb-2 font-semibold text-lg"
									style={{ color: "#1C0232" }}
								>
									No speculative leverage
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									Clean, capital-efficient strategies without the risks of
									traditional leveraged trading.
								</p>
							</Card>

							<Card className="group items-center relative overflow-hidden border-gray-200 bg-white p-8 transition-all hover:border-[#FFC300]">
								<div
									className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg"
									style={{ backgroundColor: "#FFC300" }}
								>
									<TrendingUp
										className="h-6 w-6"
										style={{ color: "#1C0232" }}
									/>
								</div>
								<h3
									className="mb-2 font-semibold text-lg"
									style={{ color: "#1C0232" }}
								>
									Market-structure yield
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									Capture consistent returns from funding rates and basis
									convergence mechanics.
								</p>
							</Card>
						</div>
					</div>
				</div>
			</section>

			<section
				id="how-it-works"
				className="border-b border-[#FFC300]/20 py-20 lg:py-28"
				style={{ backgroundColor: "#1C0232" }}
			>
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-5xl">
						<div className="mb-16 text-center">
							<h2 className="mb-4 font-bold text-4xl text-balance tracking-tight lg:text-5xl text-white">
								How It <span className="text-[#ffc300]">{""}Works</span>
							</h2>
							<p className="mx-auto max-w-2xl text-lg text-white/80">
								Four simple steps to start earning market-neutral yield
							</p>
						</div>

						<div className="grid gap-4 lg:grid-cols-4">
							<Card
								className="relative items-center bg-white/5 backdrop-blur-sm p-8 border"
								style={{ borderColor: "rgba(255, 195, 0, 0.2)" }}
							>
								<div className="mb-4 flex items-center justify-between">
									<div
										className="inline-flex h-10 w-10 items-center justify-center rounded-full font-bold text-[#1C0232]"
										style={{ backgroundColor: "#FFC300" }}
									>
										1
									</div>
								</div>
								<h3 className="mb-3 text-center font-semibold text-2xl text-white">
									{/* Deposit */}
									Connect Wallet
								</h3>
								<p className="text-[#ffc300] text-center leading-relaxed">
									Web3 wallet connect + optional KYC modal depending on service.
								</p>
							</Card>

							<Card
								className="relative items-center bg-white/5 backdrop-blur-sm p-8 border"
								style={{ borderColor: "rgba(255, 195, 0, 0.2)" }}
							>
								<div className="mb-4 flex items-start justify-between">
									<div
										className="inline-flex h-10 w-10 items-center justify-center rounded-full font-bold text-[#1C0232]"
										style={{ backgroundColor: "#FFC300" }}
									>
										2
									</div>
								</div>
								<h3 className="mb-3 text-center font-semibold text-2xl text-white">
									{/* Hedge */}
									Deposit Assets
								</h3>
								<p className="text-[#ffc300] text-center leading-relaxed">
									Supply assets to HL and/or Lighter protocols.
								</p>
							</Card>

							<Card
								className="relative items-center bg-white/5 backdrop-blur-sm p-8 border"
								style={{ borderColor: "rgba(255, 195, 0, 0.2)" }}
							>
								<div className="mb-4 flex items-start justify-between">
									<div
										className="inline-flex h-10 w-10 items-center justify-center rounded-full font-bold text-[#1C0232]"
										style={{ backgroundColor: "#FFC300" }}
									>
										3
									</div>
								</div>
								<h3 className="mb-3 text-center font-semibold text-2xl text-white">
									Choose Hedging Strategy
								</h3>
								<p className="text-[#ffc300] text-center leading-relaxed">
									Select delta-neutral, fixed spread, or target yield.
								</p>
							</Card>

							<Card
								className="relative items-center bg-white/5 backdrop-blur-sm p-8 border"
								style={{ borderColor: "rgba(255, 195, 0, 0.2)" }}
							>
								<div className="mb-4 flex items-start justify-between">
									<div
										className="inline-flex h-10 w-10 items-center justify-center rounded-full font-bold text-[#1C0232]"
										style={{ backgroundColor: "#FFC300" }}
									>
										4
									</div>
								</div>
								<h3 className="mb-3 text-center font-semibold text-2xl text-white">
									Monitor & Adjust
								</h3>
								<p className="text-[#ffc300] text-center leading-relaxed">
									See positions, funding, risk metrics live.
								</p>
							</Card>
						</div>
					</div>
				</div>
			</section>

			<section id="why-it-works" className="py-20 lg:py-28 bg-white">
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-5xl">
						<div className="mb-16 text-center">
							<h2
								className="mb-4 font-bold text-4xl text-balance tracking-tight lg:text-5xl"
								style={{ color: "#1C0232" }}
							>
								Why <span className="text-[#ffc300]"> It Works</span>
							</h2>
							<p className="mx-auto max-w-2xl text-lg text-gray-600">
								Built for consistency. Not speculation.
							</p>
						</div>

						<div className="grid gap-6 md:grid-cols-2">
							<div className="flex gap-4">
								<div className="flex-shrink-0">
									<CheckCircle2
										className="h-6 w-6"
										style={{ color: "#FFC300" }}
									/>
								</div>
								<div>
									<h3
										className="mb-2 font-semibold text-lg"
										style={{ color: "#1C0232" }}
									>
										Delta-neutral by design
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										Positions are mathematically balanced to eliminate
										directional market exposure at all times.
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="flex-shrink-0">
									<CheckCircle2
										className="h-6 w-6"
										style={{ color: "#FFC300" }}
									/>
								</div>
								<div>
									<h3
										className="mb-2 font-semibold text-lg"
										style={{ color: "#1C0232" }}
									>
										Non-custodial fund flow
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										Your funds remain under your control with transparent
										on-chain settlement.
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="flex-shrink-0">
									<CheckCircle2
										className="h-6 w-6"
										style={{ color: "#FFC300" }}
									/>
								</div>
								<div>
									<h3
										className="mb-2 font-semibold text-lg"
										style={{ color: "#1C0232" }}
									>
										Fully automated execution
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										Advanced algorithms monitor and rebalance positions 24/7
										without manual intervention.
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="flex-shrink-0">
									<CheckCircle2
										className="h-6 w-6"
										style={{ color: "#FFC300" }}
									/>
								</div>
								<div>
									<h3
										className="mb-2 font-semibold text-lg"
										style={{ color: "#1C0232" }}
									>
										Transparent yield mechanics
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										Every funding payment and basis trade is visible on-chain
										for complete transparency.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				className="border-t py-20 lg:py-28"
				style={{
					backgroundColor: "#1C0232",
					borderColor: "rgba(255, 195, 0, 0.2)",
				}}
			>
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="mb-6 font-bold text-4xl text-balance tracking-tight lg:text-5xl text-white">
							Ready to earn market-neutral yield?
						</h2>
						<p className="mb-10 text-lg text-white/80">
							Join sophisticated investors capturing consistent returns without
							directional risk.
						</p>
						<Button
							size="lg"
							className="group text-[#1C0232] font-semibold hover:opacity-90"
							style={{ backgroundColor: "#FFC300" }}
						>
							Launch App
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</div>
				</div>
			</section>

			<footer
				className="border-t py-12"
				style={{
					backgroundColor: "#1C0232",
					borderColor: "rgba(255, 195, 0, 0.2)",
				}}
			>
				<div className="container mx-auto px-4">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<p className="text-center text-white/70 text-sm">
							© 2026 Market-Neutral Yield. Built on Arbitrum.
						</p>
						<div className="flex gap-6">
							<a
								href="#"
								className="text-white/70 text-sm transition-colors hover:text-[#FFC300]"
							>
								Documentation
							</a>
							<a
								href="#"
								className="text-white/70 text-sm transition-colors hover:text-[#FFC300]"
							>
								Security
							</a>
							<a
								href="#"
								className="text-white/70 text-sm transition-colors hover:text-[#FFC300]"
							>
								Terms
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
