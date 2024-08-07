'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function HeroTarget() {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

	return (
		<div className='h-screen md:h-[36rem]' ref={ref}>
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: [20, -5, 0] } : {}}
				transition={{ duration: 0.5, ease: 'linear', delay: 0 }}
				className='my-2 px-4 text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '
			>
				Crafted for{' '}
				<span className='bg-gradient-to-r from-red-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent'>
					creative
				</span>{' '}
				minds,
			</motion.h1>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: [20, -5, 0] } : {}}
				transition={{ duration: 0.5, ease: 'linear', delay: 1 }}
				className='my-2 px-4 text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '
			>
				<span className='bg-gradient-to-r from-lime-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent'>
					neurodivergent
				</span>{' '}
				thinkers,
			</motion.h1>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: [20, -5, 0] } : {}}
				transition={{ duration: 0.5, ease: 'linear', delay: 2 }}
				className='my-2 px-4 text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '
			>
				<span className='bg-gradient-to-r from-fuchsia-400 via-blue-500 to-teal-300 bg-clip-text text-transparent'>
					visionary
				</span>{' '}
				artists,
			</motion.h1>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: [20, -5, 0] } : {}}
				transition={{ duration: 0.5, ease: 'linear', delay: 3 }}
				className='my-2 px-4 text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '
			>
				self-employed{' '}
				<span className='bg-gradient-to-r from-violet-600 via-pink-500 to-red-500 bg-clip-text text-transparent'>
					innovators
				</span>
				,
			</motion.h1>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: [20, -5, 0] } : {}}
				transition={{ duration: 0.5, ease: 'linear', delay: 4 }}
				className='my-2 px-4 text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '
			>
				and{' '}
				<span className='bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
					wandering nomads
				</span>
				.
			</motion.h1>
		</div>
	)
}
