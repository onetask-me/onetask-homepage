'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

export const Highlight = ({
	children,
	className,
	delay
}: {
	children: React.ReactNode
	className?: string
	delay: number
}) => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

	return (
		<motion.span
			ref={ref}
			initial={{ backgroundSize: '0% 100%' }}
			animate={inView ? { backgroundSize: '100% 100%' } : {}}
			transition={{
				duration: 0.5,
				ease: 'linear',
				delay
			}}
			style={{
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'left center',
				display: 'inline'
			}}
			className={cn(
				`relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-br`,
				className
			)}
		>
			{children}
		</motion.span>
	)
}
