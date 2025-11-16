'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TextShimmer } from '@/components/ui/text-shimmer'

export function Preloader() {
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		const markLoaded = () => setLoaded(true)
		if (document.readyState === 'complete') {
			markLoaded()
		} else {
			window.addEventListener('load', markLoaded, { once: true })
		}
		return () => {
			window.removeEventListener('load', markLoaded)
		}
	}, [])

	return (
		<AnimatePresence>
			{!loaded && (
				<motion.div
					className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.4 }}
				>
					<TextShimmer className="text-xl md:text-2xl font-mono" duration={1}>
						Generating code...
					</TextShimmer>
				</motion.div>
			)}
		</AnimatePresence>
	)
}


