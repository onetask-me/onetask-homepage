'use client'

import { cn } from '@/lib/utils'
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll
} from 'framer-motion'
import { useState } from 'react'

import { Logo } from '../Logo'
import { ModeToggle } from '../mode-toggle'

export const DesktopNavbar = () => {
	const { scrollY } = useScroll()

	const [showBackground, setShowBackground] = useState(false)

	useMotionValueEvent(scrollY, 'change', value => {
		if (value > 100) {
			setShowBackground(true)
		} else {
			setShowBackground(false)
		}
	})
	return (
		<div
			className={cn(
				'w-full flex relative justify-between px-4 py-2 rounded-full bg-transparent transition duration-200'
			)}
		>
			<div className='flex flex-row gap-2 items-center bg-black dark:bg-black rounded-full'>
				<Logo />
			</div>

			<AnimatePresence>
				{showBackground && (
					<motion.div
						key={String(showBackground)}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className='bg-neutral-100 dark:bg-black rounded-full flex space-x-2 items-center' // TODO: Add `px-1` once login is activated
					>
						<ModeToggle />

						{/* TODO: activate login
						<Button as={Link} variant='simple' href='/signin'>
							Login
						</Button>

						<Button as={Link} href='/signup'>
							Sign Up
						</Button> */}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
