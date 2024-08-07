import { Footer } from '@/components/footer'
import { NavBar } from '@/components/navbar'
import config from '@blog/config'
import type { Metadata } from 'next'
import * as React from 'react'

import './styles/output.css'

export const metadata: Metadata = {
	metadataBase: new URL(config.blog.url),
	title: {
		default: config.blog.title,
		template: '%s'
	},
	description: config.blog.description,
	openGraph: {
		title: '%s',
		description: config.blog.description,
		url: config.blog.url,
		siteName: config.blog.title,
		locale: 'en_US',
		type: 'website'
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	twitter: {
		title: '%s',
		card: 'summary_large_image'
	}
}

export const maxDuration = 300

const AppBlogLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='flex flex-col flex-auto py-8'>
			<NavBar />

			<div className='py-8'>{children}</div>

			<Footer />
		</main>
	)
}

export default AppBlogLayout
