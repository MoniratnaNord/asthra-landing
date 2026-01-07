"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Wallet } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "Strategies", href: "#strategies" },
		{ name: "How it Works", href: "#how-it-works" },
		{ name: "Risks", href: "#risks" },
		{ name: "Docs", href: "#" },
	];

	return (
		<nav
			className={cn(
				"bg-[#1B012F] fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
				scrolled
					? "bg-background/80 backdrop-blur-lg border-white/5 py-4"
					: "bg-transparent py-6"
			)}
		>
			<div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2 group cursor-pointer">
					{/* <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold font-mono text-xl">
						A
					</div> */}
					<span className="text-[#ffc300] font-display font-bold text-xl tracking-wide group-hover:text-primary transition-colors">
						ASTHRA
					</span>
				</Link>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
						>
							{link.name}
						</a>
					))}
				</div>

				<div className="hidden md:flex items-center gap-4">
					{/* <Button
						variant="ghost"
						className="text-muted-foreground hover:text-white"
					>
						Coming Soon
					</Button> */}
					<Button className="bg-[#ffc300] text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all">
						{/* <Wallet className="w-4 h-4 mr-2" /> */}
						Coming Soon
					</Button>
				</div>

				{/* Mobile Toggle */}
				<button
					className="md:hidden text-white"
					onClick={() => setMobileOpen(!mobileOpen)}
				>
					{mobileOpen ? <X /> : <Menu />}
				</button>
			</div>

			{/* Mobile Menu */}
			{mobileOpen && (
				<div className="absolute top-full left-0 w-full bg-background border-b border-white/5 p-4 md:hidden flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="text-lg font-medium text-muted-foreground hover:text-primary py-2"
							onClick={() => setMobileOpen(false)}
						>
							{link.name}
						</a>
					))}
					<div className="h-px bg-white/5 my-2" />
					<Button className="w-full bg-primary text-primary-foreground font-semibold">
						Launch App
					</Button>
				</div>
			)}
		</nav>
	);
}
