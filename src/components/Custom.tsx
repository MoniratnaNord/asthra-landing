import React, { useState, useEffect, useRef } from "react";
import {
	ArrowRight,
	TrendingUp,
	Shield,
	Activity,
	Link2,
	Wallet,
	DollarSign,
	Settings,
	Eye,
	Star,
	Users,
	Lock,
	Zap,
} from "lucide-react";
import logo from "../assets/logo_removed.png";

const AstrahLanding = () => {
	const [scrollY, setScrollY] = useState(0);
	const canvasRef = useRef(null);
	const [particles, setParticles] = useState([]);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Particle system
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const particleCount = 50;
		const particlesArray = [];

		class Particle {
			constructor() {
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * canvas.height;
				this.size = Math.random() * 2 + 0.5;
				this.speedX = Math.random() * 0.5 - 0.25;
				this.speedY = Math.random() * 0.5 - 0.25;
				this.opacity = Math.random() * 0.5 + 0.2;
			}

			update() {
				this.x += this.speedX;
				this.y += this.speedY;

				if (this.x > canvas.width) this.x = 0;
				if (this.x < 0) this.x = canvas.width;
				if (this.y > canvas.height) this.y = 0;
				if (this.y < 0) this.y = canvas.height;
			}

			draw() {
				ctx.fillStyle = `rgba(96, 165, 250, ${this.opacity})`;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		for (let i = 0; i < particleCount; i++) {
			particlesArray.push(new Particle());
		}

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < particlesArray.length; i++) {
				particlesArray[i].update();
				particlesArray[i].draw();

				for (let j = i; j < particlesArray.length; j++) {
					const dx = particlesArray[i].x - particlesArray[j].x;
					const dy = particlesArray[i].y - particlesArray[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 100) {
						ctx.strokeStyle = `rgba(96, 165, 250, ${
							0.1 * (1 - distance / 100)
						})`;
						ctx.lineWidth = 0.5;
						ctx.beginPath();
						ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
						ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
						ctx.stroke();
					}
				}
			}

			requestAnimationFrame(animate);
		}

		animate();

		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const features = [
		{
			icon: <TrendingUp className="w-8 h-8" />,
			title: "Integrated Perp & Spot Lending",
			desc: "Supply assets to both HL and Lighter markets. Collect interest + funding-fee share",
			image:
				"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
		},
		{
			icon: <Shield className="w-8 h-8" />,
			title: "Delta Neutral Strategies",
			desc: "Auto-balance your perp vs spot exposure. Protect against market swings. Fully transparent & on-chain",
			image:
				"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
		},
		{
			icon: <Activity className="w-8 h-8" />,
			title: "Track Positions in Real-Time",
			desc: "Live PnL, risk metrics, margin ratios. See funding rates and expiry events",
			image:
				"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
		},
		{
			icon: <Link2 className="w-8 h-8" />,
			title: "Cross-Protocol Connectivity",
			desc: "Unified dashboard for multiple markets. Single wallet/connect experience",
			image:
				"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
		},
	];

	const steps = [
		{
			icon: <Wallet className="w-6 h-6" />,
			title: "Connect Wallet",
			desc: "Web3 wallet connect + optional KYC modal depending on service",
			image:
				"https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
		},
		{
			icon: <DollarSign className="w-6 h-6" />,
			title: "Deposit Assets",
			desc: "Supply assets to HL and/or Lighter protocols",
			image:
				"https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop",
		},
		{
			icon: <Settings className="w-6 h-6" />,
			title: "Choose Hedging Strategy",
			desc: "Select delta-neutral, fixed spread, or target yield",
			image:
				"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
		},
		{
			icon: <Eye className="w-6 h-6" />,
			title: "Monitor & Adjust",
			desc: "See positions, funding, risk metrics live",
			image:
				"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
		},
	];

	const testimonials = [
		{
			name: "Sarah Chen",
			role: "DeFi Trader",
			image:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
			text: "Finally, a platform that removes the guesswork. My portfolio stays balanced automatically.",
		},
		{
			name: "Marcus Rodriguez",
			role: "Fund Manager",
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
			text: "The transparency and real-time tracking make this essential for institutional use.",
		},
		{
			name: "Elena Volkov",
			role: "Crypto Investor",
			image:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
			text: "Delta-neutral strategies have transformed how I approach yield generation. No more sleepless nights.",
		},
	];

	return (
		<div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
			{/* Particle Canvas */}
			<canvas
				ref={canvasRef}
				className="fixed inset-0 pointer-events-none z-0"
			/>

			{/* Gradient Overlays */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
				<div
					className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
					style={{
						top: "20%",
						left: "10%",
						transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.03}px)`,
					}}
				/>
				<div
					className="absolute w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
					style={{
						bottom: "20%",
						right: "10%",
						transform: `translate(-${scrollY * 0.04}px, -${scrollY * 0.04}px)`,
					}}
				/>
				<div
					className="absolute w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"
					style={{
						top: "50%",
						right: "30%",
						transform: `translate(${scrollY * 0.03}px, -${scrollY * 0.02}px)`,
					}}
				/>
			</div>

			{/* Navigation */}
			<nav className="relative z-50 px-6 py-4 bg-slate-900/50 backdrop-blur-md border-b border-slate-800">
				<div className="max-w-7xl mx-auto flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<div className="relative">
							<div className="absolute inset-0 bg-blue-500 blur-lg opacity-50 rounded-full"></div>
							{/* <svg
								width="48"
								height="48"
								viewBox="0 0 48 48"
								className="relative"
							>
								<defs>
									<linearGradient
										id="logo-gradient"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="100%"
									>
										<stop offset="0%" style={{ stopColor: "#3b82f6" }} />
										<stop offset="100%" style={{ stopColor: "#06b6d4" }} />
									</linearGradient>
								</defs>
								<path
									d="M24 4 L40 14 L40 34 L24 44 L8 34 L8 14 Z"
									fill="url(#logo-gradient)"
									opacity="0.3"
								/>
								<path
									d="M24 8 L36 16 L36 32 L24 40 L12 32 L12 16 Z"
									fill="url(#logo-gradient)"
								/>
								<path
									d="M24 16 L30 20 L30 28 L24 32 L18 28 L18 20 Z"
									fill="#ffffff"
									opacity="0.9"
								/>
							</svg> */}
							<img src={logo} width={40} height={40} />
						</div>
						<span className="text-2xl font-bold">Asthra</span>
					</div>
					<div className="hidden md:flex items-center space-x-8">
						<a
							href="#features"
							className="hover:text-blue-400 transition-colors"
						>
							Features
						</a>
						<a href="#how" className="hover:text-blue-400 transition-colors">
							How It Works
						</a>
						<a
							href="#whyItWorks"
							className="hover:text-blue-400 transition-colors"
						>
							Why It Works
						</a>
					</div>
					<button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium">
						Coming Soon
					</button>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="relative z-10 px-6 py-24 md:py-32">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
								<Zap className="w-4 h-4 text-blue-400" />
								{/* <span className="text-sm text-blue-300">
									Now Live on Mainnet
								</span> */}
							</div>
							<h1 className="text-5xl md:text-6xl font-bold leading-tight">
								Market-Neutral Yield
								<span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
									Without Trading Risk
								</span>
							</h1>
							<p className="text-xl text-slate-300 leading-relaxed">
								Deploy funds into automated delta-neutral strategies designed to
								capture funding and basis across all market conditions.
							</p>
							<div className="flex flex-wrap gap-4">
								<button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 flex items-center space-x-2">
									<span>Coming Soon</span>
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</button>
								{/* <button className="px-8 py-4 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300">
									View Docs
								</button> */}
							</div>
							{/* <div className="flex items-center space-x-8 pt-4">
								<div>
									<div className="text-3xl font-bold text-blue-400">$245M+</div>
									<div className="text-sm text-slate-400">
										Total Value Locked
									</div>
								</div>
								<div className="h-12 w-px bg-slate-700"></div>
								<div>
									<div className="text-3xl font-bold text-cyan-400">18.5%</div>
									<div className="text-sm text-slate-400">Average APY</div>
								</div>
								<div className="h-12 w-px bg-slate-700"></div>
								<div>
									<div className="text-3xl font-bold text-purple-400">
										1,247
									</div>
									<div className="text-sm text-slate-400">Active Users</div>
								</div>
							</div> */}
						</div>
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
							<img
								src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop"
								alt="Dashboard Preview"
								className="relative rounded-2xl border border-slate-800 shadow-2xl"
							/>
							<div className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-4 shadow-xl">
								<div className="flex items-center space-x-3">
									{/* <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div> */}
									{/* <span className="text-sm font-medium">
										Live Trading Active
									</span> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section
				id="features"
				className="relative z-10 px-6 py-20 bg-slate-900/30"
			>
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							Why Choose Our Platform
						</h2>
						<p className="text-slate-400 text-lg">
							Built for consistency. Not speculation.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{features.map((feature, i) => (
							<div
								key={i}
								className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
							>
								<div className="relative h-48 overflow-hidden">
									<img
										src={feature.image}
										alt={feature.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
								</div>
								<div className="p-6">
									<div className="flex items-start space-x-4">
										<div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
											{feature.icon}
										</div>
										<div className="flex-1">
											<h3 className="text-xl font-bold mb-2">
												{feature.title}
											</h3>
											<p className="text-slate-400 leading-relaxed">
												{feature.desc}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section id="how" className="relative z-10 px-6 py-20">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							Start Lending & Hedging in Minutes
						</h2>
						<p className="text-slate-400 text-lg">
							Four simple steps to market-neutral yield
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{steps.map((step, i) => (
							<div key={i} className="relative group">
								<div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
									<div className="relative h-32 overflow-hidden">
										<img
											src={step.image}
											alt={step.title}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
										<div className="absolute top-4 left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">
											{i + 1}
										</div>
									</div>
									<div className="p-6">
										<div className="flex items-center space-x-3 mb-3">
											<div className="p-2 bg-blue-600/20 rounded-lg">
												{step.icon}
											</div>
											<h3 className="text-lg font-bold">{step.title}</h3>
										</div>
										<p className="text-slate-400 text-sm leading-relaxed">
											{step.desc}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			{/* <section
				id="testimonials"
				className="relative z-10 px-6 py-20 bg-slate-900/30"
			>
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							Trusted by Traders Worldwide
						</h2>
						<p className="text-slate-400 text-lg">
							See what our users have to say
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{testimonials.map((testimonial, i) => (
							<div
								key={i}
								className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
							>
								<div className="flex items-center space-x-1 mb-4">
									{[...Array(5)].map((_, j) => (
										<Star
											key={j}
											className="w-4 h-4 fill-yellow-500 text-yellow-500"
										/>
									))}
								</div>
								<p className="text-slate-300 mb-6 leading-relaxed">
									"{testimonial.text}"
								</p>
								<div className="flex items-center space-x-3">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="w-12 h-12 rounded-full border-2 border-blue-500"
									/>
									<div>
										<div className="font-semibold">{testimonial.name}</div>
										<div className="text-sm text-slate-400">
											{testimonial.role}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section> */}

			{/* Why It Works */}
			<section id="whyItWorks" className="relative z-10 px-6 py-20">
				<div className="max-w-5xl mx-auto">
					<div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md border border-slate-700 rounded-3xl p-12">
						<h2 className="text-4xl font-bold text-center mb-12">
							Why It Works
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{[
								{
									icon: <Shield className="w-6 h-6" />,
									text: "Delta-neutral by design",
								},
								{
									icon: <Lock className="w-6 h-6" />,
									text: "Non-custodial fund flow",
								},
								{
									icon: <Zap className="w-6 h-6" />,
									text: "Fully automated execution",
								},
								{
									icon: <Activity className="w-6 h-6" />,
									text: "Transparent yield mechanics",
								},
							].map((item, i) => (
								<div
									key={i}
									className="flex items-center space-x-4 bg-slate-900/50 border border-slate-700 rounded-xl p-5 hover:bg-slate-800/50 transition-all duration-300"
								>
									<div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
										{item.icon}
									</div>
									<span className="text-lg font-medium">{item.text}</span>
								</div>
							))}
						</div>

						<div className="text-center mt-10 pt-10 border-t border-slate-700">
							<p className="text-2xl font-semibold text-slate-300">
								Built for consistency. Not speculation.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			{/* <section className="relative z-10 px-6 py-20">
				<div className="max-w-5xl mx-auto">
					<div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center">
						<div className="absolute inset-0 opacity-10">
							<div
								className="absolute inset-0"
								style={{
									backgroundImage:
										"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
									backgroundSize: "40px 40px",
								}}
							></div>
						</div>
						<div className="relative z-10">
							<h2 className="text-4xl md:text-5xl font-bold mb-6">
								Ready to Start Earning?
							</h2>
							<p className="text-xl mb-8 text-blue-50">
								Join thousands of users already earning market-neutral yields
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<button className="group px-10 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2">
									<span>Launch App</span>
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</button>
								<button className="px-10 py-4 bg-blue-700 text-white rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all duration-300">
									Read Documentation
								</button>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* Footer */}
			<footer className="relative z-10 px-6 py-12 border-t border-slate-800 bg-slate-900/50 backdrop-blur-md">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
						<div>
							<div className="flex items-center space-x-2 mb-4">
								<img src={logo} width={30} height={30} />
								<span className="text-xl font-bold">Asthra</span>
							</div>
							<p className="text-slate-400 text-sm">
								Delta-neutral strategies for the modern DeFi ecosystem
							</p>
						</div>
						{/* <div>
							<h4 className="font-semibold mb-4">Product</h4>
							<ul className="space-y-2 text-slate-400 text-sm">
								<li>
									<a href="#" className="hover:text-blue-400 transition-colors">
										Features
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-blue-400 transition-colors">
										Pricing
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-blue-400 transition-colors">
										Documentation
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Company</h4>
							<ul className="space-y-2 text-slate-400 text-sm">
								<li>
									<a href="#" className="hover:text-blue-400 transition-colors">
										About
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-blue-400 transition-colors">
										Blog
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-blue-400 transition-colors">
										Careers
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Legal</h4>
							<ul className="space-y-2 text-slate-400 text-sm">
								<li>
									<a href="#" className="hover:text-blue-400 transition-colors">
										Privacy
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-blue-400 transition-colors">
										Terms
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-blue-400 transition-colors">
										Security
									</a>
								</li>
							</ul>
						</div> */}
						<div className="pt-8 border-slate-800 text-center text-slate-400 text-sm">
							<p>&copy; 2026 Asthra. All rights reserved.</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default AstrahLanding;
