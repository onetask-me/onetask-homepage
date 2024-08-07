export const utilSeo = {
	metadataBase: new URL('https://onetask.me'),
	noindex: !process.env.NEXT_PUBLIC_ENV?.includes('prd'),
	dangerouslySetAllPagesToNoIndex:
		!process.env.NEXT_PUBLIC_ENV?.includes('prd'),
	nofollow: !process.env.NEXT_PUBLIC_ENV?.includes('prd'),
	dangerouslySetAllPagesToNoFollow:
		!process.env.NEXT_PUBLIC_ENV?.includes('prd'),
	// Actual SEO
	titleTemplate: 'OneTask | %s',
	title: 'AI to-do app',
	description:
		'AI-powered to-do app that knows what you need and helps you focus on the important stuff.',
	openGraph: {
		title: 'OneTask | AI to-do app',
		url: process.env.NEXT_PUBLIC_URL!,
		description:
			'AI-powered to-do app that knows what you need and helps you focus on the important stuff.',
		type: 'website',
		locale: 'en_US',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_URL}/opengraph.png`,
				width: 792,
				height: 209,
				alt: 'OneTask | AI to-do app'
			}
		]
	},
	twitter: {
		handle: '@onetask_',
		site: '@onetask_',
		cardType: 'summary_large_image'
	}
}
