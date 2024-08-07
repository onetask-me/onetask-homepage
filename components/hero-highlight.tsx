'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Highlight } from './ui/hero-highlight'

export function HeroHighlight() {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

	return (
		<motion.h1
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={inView ? { opacity: 1, y: [20, -5, 0] } : {}}
			transition={{ duration: 2, ease: 'linear', delay: 0 }}
			className='h-screen md:h-[30rem] text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '
		>
			We designed an AI to-do app
			<br />
			for people (like us)
			<br />
			<Highlight
				className='text-white from-fuchsia-600 to-blue-800'
				delay={1.5}
			>
				who think differently.
			</Highlight>
		</motion.h1>
	)
}
