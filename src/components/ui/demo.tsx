'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Scene } from "@/components/ui/hero-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LucideIcon, Cpu, ShieldCheck, Layers, Zap, Eye } from "lucide-react"
import { Hero } from "@/components/ui/hero-1";

export function SplineSceneBasic() {
	return (
		<div className="w-full h-[100svh] md:h-screen bg-black relative overflow-hidden md:overflow-visible">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/>
			
			<div className="flex h-full flex-col md:flex-row">
				{/* Left content */}
				<div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
					<h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
						Interactive 3D
					</h1>
					<p className="mt-4 text-neutral-300 max-w-lg">
						Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
						that capture attention and enhance your design.
					</p>
				</div>
				{/* Right content */}
				<div className="flex-1 relative">
					<SplineScene 
						scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
						className="w-full h-full"
					/>
				</div>
			</div>
		</div>
	)
}


export function NavBarDemo({ variant = "default" }: { variant?: "default" | "hero" }) {
	const navItems = [
		{ name: 'Home', url: '#', icon: Home },
		{ name: 'About', url: '#', icon: User },
		{ name: 'Projects', url: '#', icon: Briefcase },
		{ name: 'Resume', url: '#', icon: FileText }
	]

	return <NavBar items={navItems} variant={variant} />
}

const features = [
	{ icon: Cpu, title: "Performance", description: "Ultra-fast data processing in every situation." },
	{ icon: ShieldCheck, title: "Security", description: "Advanced protection for complete peace of mind." },
	{ icon: Layers, title: "Modularity", description: "Easy integration with existing architecture." },
	{ icon: Zap, title: "Responsiveness", description: "Instant response to every command." },
]

export function DemoTwo() {
	return (
		<div className="relative overflow-hidden min-h-svh w-full bg-black text-white flex flex-col items-center justify-center p-8">
			<div className="w-full max-w-6xl space-y-12 relative z-10">
				<div className="flex flex-col items-center text-center space-y-8 mt-10">
					<Badge variant="secondary" className="backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 px-4 py-2 rounded-full">
						✨ Next Generation Tools
					</Badge>
					<div className="space-y-6 flex items-center justify-center flex-col">
						<h1 className="text-3xl md:text-6xl font-semibold tracking-tight max-w-3xl">
							Discover minimalism and power in one place
						</h1>
						<p className="text-lg text-neutral-300 max-w-2xl">
							Designed with aesthetics and performance in mind. Experience ultra-fast processing, advanced security, and intuitive design.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 items-center">
							<Button className="text-sm px-8 py-3 rounded-xl bg-white text-black border border-white/10 shadow-none hover:bg-white/90 transition-none">
								Get Started
							</Button>
							<Button className="text-sm px-8 py-3 rounded-xl bg-transparent text-white border border-white/20 shadow-none hover:bg-white/10 transition-none">
								Learn More
							</Button>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
					{features.map((feature, idx) => (
						<div key={idx} className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3">
							<feature.icon size={18} className="text-white/80 md:w-5 md:h-5" />
							<h3 className="text-sm md:text-base font-medium">{feature.title}</h3>
							<p className="text-xs md:text-sm text-neutral-400">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
			<div className="absolute inset-0">
				<Scene />
			</div>
		</div>
	)
}

export function DemoOne() {
	return (
		<Hero
			title="Build smarter tools for modern teams"
			subtitle="Streamline your workflow and boost productivity with intuitive solutions. Security, speed, and simplicity—all in one platform."
			eyebrow="Next-Gen Productivity"
			ctaLabel="Get Started"
			ctaHref="#"
		/>
	);
}

