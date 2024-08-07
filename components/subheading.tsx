import { cn } from '@/lib/utils'
import { AnimationProps, MotionProps } from 'framer-motion'
import React from 'react'
import Balancer from 'react-wrap-balancer'

export const Subheading = ({
	className,
	as: Tag = 'h2',
	children
}: {
	className?: string
	as?: any
	children: any
} & MotionProps &
	React.HTMLAttributes<HTMLHeadingElement | AnimationProps>) => {
	return (
		<Tag
			className={cn(
				'text-sm md:text-base  max-w-4xl text-left my-4 mx-auto',
				'text-muted text-center font-normal dark:text-muted-dark',
				className
			)}
		>
			<Balancer>{children}</Balancer>
		</Tag>
	)
}
