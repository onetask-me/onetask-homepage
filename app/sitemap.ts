import config from '@blog/config'
import type { Metadata } from '@blog/data'
import { createClient } from '@vercel/kv'
import { MetadataRoute } from 'next'

const AppSitemap = async (): Promise<MetadataRoute.Sitemap> => {
	if (
		!process.env.BLOG_METADATA_REST_API_URL ||
		!process.env.BLOG_METADATA_REST_API_TOKEN
	)
		return [
			{
				url: `${config.blog.url}/`,
				lastModified: new Date().toISOString().split('T')[0]
			}
		]

	const kv = createClient({
		url: process.env.BLOG_METADATA_REST_API_URL,
		token: process.env.BLOG_METADATA_REST_API_TOKEN
	})

	const slugs: string[] = (await kv.get('post:slugsbydate')) ?? []

	// Sort posts by date in descending order
	const sortedSlugs = slugs
		.sort((a: string, b: string) => (a > b ? -1 : 1))
		.map(slug => slug.slice(11))

	const postsMetadata = await Promise.all(
		sortedSlugs.map(async slug => {
			const postMetadata = await kv.get<Metadata>(`post:metadata:${slug}`)

			return {
				slug,
				...(postMetadata ?? {})
			}
		})
	)

	const validPosts = postsMetadata
		.filter(post => Boolean(post.publishedAt))
		.sort((a, b) => {
			if (!a.publishedAt || !b.publishedAt) return 0

			return b.publishedAt.localeCompare(a.publishedAt)
		})

	return [
		{
			url: config.blog.homepage,
			lastModified: new Date().toISOString().split('T')[0]
		},
		{
			url: config.blog.url,
			lastModified: new Date().toISOString().split('T')[0]
		},
		...validPosts.map(post => ({
			url: `${config.blog.url}/${post.slug}`,
			lastModified: new Date(post.publishedAt!).toISOString().split('T')[0]
		}))
	]
}

export default AppSitemap
