const path = require('path')

/** @type {import('next').NextConfig} */
const config = {
	env: {
		AYRSHARE: process.env.AYRSHARE,
		BLOG_METADATA_REST_API_TOKEN: process.env.BLOG_METADATA_REST_API_TOKEN,
		BLOG_METADATA_REST_API_URL: process.env.BLOG_METADATA_REST_API_URL,
		BLOG_METADATA_URL: process.env.BLOG_METADATA_URL,
		BLOG_READ_WRITE_TOKEN: process.env.BLOG_READ_WRITE_TOKEN,
		BRAVE: process.env.BRAVE,
		CRON_SECRET: process.env.CRON_SECRET,
		OPENAI_BLOG: process.env.OPENAI_BLOG,
		OPENAI_BLOG_ASSISTANT_ID: process.env.OPENAI_BLOG_ASSISTANT_ID,
		UNSPLASH: process.env.UNSPLASH
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com'
			}
		]
	},
	redirects: [
		{
			source: '/404',
			destination: '/',
			permanent: true
		},
		{
			source: '/cookies',
			destination: '/legal/cookies',
			permanent: true
		},
		{
			source: '/privacy',
			destination: '/legal/privacy',
			permanent: true
		},
		{
			source: '/terms',
			destination: '/legal/terms',
			permanent: true
		}
	],
	staticPageGenerationTimeout: 900, // 15 minute timeout; 9000 blog posts are processed at 100 apiece at 10 second intervals → (9000/100 * 10) / 60 = 15 minutes
	webpack: config => {
		config.resolve.alias['@assets'] = path.join(__dirname, 'assets')
		config.resolve.alias['@components'] = path.join(__dirname, 'components')
		config.resolve.alias['@lib'] = path.join(__dirname, 'lib')
		config.resolve.alias['@styles'] = path.join(__dirname, 'styles')
		config.resolve.alias['@blog'] = path.join(__dirname, 'app/blog')
		config.resolve.alias['@utils'] = path.join(__dirname, 'utils')
		// Add other aliases as needed
		return config
	}
}

module.exports = config
