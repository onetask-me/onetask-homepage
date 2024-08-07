'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { SparklesCore } from './ui/sparkles'

export const Hero = () => {
	const { theme } = useTheme()

	return (
		<div className='flex flex-col pt-20 md:pt-40 relative overflow-hidden h-screen'>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 0.5 }}
				className='text-2xl md:text-4xl lg:text-8xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-10'
			>
				<div className='h-[40rem] w-full bg-white dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md'>
					<h1 className='my-8 md:text-7xl text-4xl lg:text-8xl font-bold text-center text-zinc-800 dark:text-white relative z-20'>
						Get Sh*t Done
					</h1>

					<div className='w-full h-40 relative'>
						{/* Gradients */}
						<div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
						<div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
						<div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
						<div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

						{/* Core component */}
						<SparklesCore
							background='transparent'
							minSize={0.4}
							maxSize={1}
							particleDensity={1200}
							className='w-full h-full'
							particleColor={theme === 'dark' ? '#FFFFFF' : '#000000'}
						/>

						{/* Radial Gradient to prevent sharp edges */}
						<div className='absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: [20, -5, 0] }}
							transition={{ duration: 0.5, ease: 'linear', delay: 1 }}
							className='font-cursive tracking-wider -mt-28 text-4xl lg:text-5xl font-bold text-center text-zinc-800 dark:text-white relative z-20'
						>
							Free Your Mind.
						</motion.h1>
					</div>
				</div>
			</motion.h1>
		</div>
	)
}
