import { ThemeProvider } from '@/context/theme-provider'
import { cn } from '@/lib/utils'
import { utilSeo } from '@/seo'
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import { Over_the_Rainbow } from 'next/font/google'

import './globals.css'

const cursive = Over_the_Rainbow({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-cursive',
	weight: '400'
})

export const metadata: Metadata = utilSeo

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ViewTransitions>
			<html lang='en' className={cursive.variable}>
				<body
					className={cn(
						GeistSans.className,
						'bg-white dark:bg-black antialiased h-full w-full'
					)}
				>
					<ThemeProvider
						attribute='class'
						enableSystem
						disableTransitionOnChange
						defaultTheme='dark'
					>
						<ClerkProvider
							appearance={{
								variables: {
									colorPrimary: 'hsl(200 100% 40%)'
								},
								elements: {
									socialButtonsVariant: 'iconButton',
									socialButtonsPlacement: 'top'
								}
							}}
						>
							{children}
						</ClerkProvider>
					</ThemeProvider>

					<Analytics />
				</body>
			</html>
		</ViewTransitions>
	)
}
