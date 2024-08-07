'use client'

import { Highlight } from '@/components/ui/hero-highlight'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function HeroSubtasks() {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

	return (
		<div className='h-screen md:h-[30rem]' ref={ref}>
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: [20, -5, 0] } : {}}
				transition={{ duration: 0.5, ease: 'linear', delay: 0 }}
				className='my-2 px-4 text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center mx-auto '
			>
				Where AI breaks down your to-dos
			</motion.h1>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: [20, -5, 0] } : {}}
				transition={{ duration: 0.5, ease: 'linear', delay: 1 }}
				className='my-2 px-4 text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center mx-auto '
			>
				into{' '}
				<Highlight
					className='text-white from-purple-600 via-fuchsia-500 to-red-400'
					delay={0.5}
				>
					manageable sub-tasks
				</Highlight>{' '}
			</motion.h1>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: [20, -5, 0] } : {}}
				transition={{ duration: 0.5, ease: 'linear', delay: 2 }}
				className='my-2 px-4 text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center mx-auto '
			>
				and{' '}
				<Highlight
					className='text-white from-red-600 via-pink-500 to-orange-400'
					delay={0.5}
				>
					helps you complete them
				</Highlight>
				.
			</motion.h1>
		</div>
	)
}
