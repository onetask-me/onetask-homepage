import { Footer } from '@/components/footer'
import { NavBar } from '@/components/navbar'
import { utilSeo } from '@/seo'
import type { Metadata } from 'next'

import '../globals.css'

export const metadata: Metadata = utilSeo

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main>
			<NavBar />

			{children}

			<Footer />
		</main>
	)
}
