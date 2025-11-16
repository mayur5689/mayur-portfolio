'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function SplineSceneBasic() {
	return (
		<div className="w-full h-[100svh] md:h-screen bg-black relative overflow-hidden">
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


export function NavBarDemo() {
	const navItems = [
		{ name: 'Home', url: '#', icon: Home },
		{ name: 'About', url: '#', icon: User },
		{ name: 'Projects', url: '#', icon: Briefcase },
		{ name: 'Resume', url: '#', icon: FileText }
	]

	return <NavBar items={navItems} />
}

