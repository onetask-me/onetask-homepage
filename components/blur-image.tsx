'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

interface IBlurImage {
	height?: any
	width?: any
	src?: string | any
	objectFit?: any
	className?: string | any
	alt?: string | undefined
	layout?: any
	[x: string]: any
}

export const BlurImage = ({
	height,
	width,
	src,
	className,
	objectFit,
	alt,
	layout,
	...rest
}: IBlurImage) => {
	const [isLoading, setLoading] = useState(true)
	if (!src || src === 'undefined') return null
	return (
		<Image
			className={clsx(
				'transition duration-300 transform',
				isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100',
				className
			)}
			onLoad={() => setLoading(false)}
			src={src}
			width={width}
			height={height}
			loading='lazy'
			decoding='async'
			blurDataURL={src}
			layout={layout}
			alt={alt ? alt : 'Avatar'}
			{...rest}
		/>
	)
}
