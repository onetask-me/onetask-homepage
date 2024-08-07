import { ListBlobResultBlob, head, list } from '@vercel/blob'

export type Metadata = {
	title: string
	author: string
	publishedAt: string
	summary: string
	introduction?: string
	image?: string
}

export const parseFrontmatter = (fileContent: string) => {
	const frontmatterRegex = /---\s*([\s\S]+?)\s*---/
	const match = frontmatterRegex.exec(fileContent)

	if (!match) {
		return { metadata: {} as Metadata, content: fileContent.trim() }
	}

	const frontMatterBlock = match[1]
	const content = fileContent.substring(match[0].length).trim()
	const frontMatterLines = frontMatterBlock.trim().split('\n')
	const metadata: Partial<Metadata> = {}

	frontMatterLines.forEach(line => {
		const [key, ...valueArr] = line.split(': ')
		if (key) {
			let value = valueArr.join(': ').trim()
			value = value.replace(/^['"]|['"]$/g, '') // Remove quotes more reliably
			metadata[key.trim() as keyof Metadata] = value
		}
	})

	return { metadata: metadata as Metadata, content }
}

const getBlobContent = async (blobUrl: string) => {
	const { downloadUrl } = await head(blobUrl, {
		token: process.env.BLOG_READ_WRITE_TOKEN
	})
	const response = await fetch(downloadUrl)
	const data = await response.text()
	return data
}

export const getBlogPosts = async ({
	limit = 1000,
	slug
}: {
	limit?: number
	slug?: string
}): Promise<{ content: string; metadata: Metadata; slug: string }[]> => {
	if (slug) {
		const result = await list({
			limit: 1,
			prefix: slug,
			token: process.env.BLOG_READ_WRITE_TOKEN
		})

		if (result.blobs.length === 0) return []

		const blob = result.blobs[0] as ListBlobResultBlob

		const rawContent = await getBlobContent(blob.url)

		const { metadata, content } = parseFrontmatter(rawContent)

		return [
			{
				content,
				metadata,
				slug: blob.pathname
			}
		]
	}

	let posts: { content: string; metadata: Metadata; slug: string }[] = []

	const MAX_LIMIT = 100

	if (limit > MAX_LIMIT) {
		let cursor: string | undefined
		let hasMore = true
		let iterations = 0
		const maxIterations = Math.ceil(limit / MAX_LIMIT)

		while (hasMore && iterations < maxIterations) {
			const result = await list({
				cursor,
				limit: MAX_LIMIT,
				token: process.env.BLOG_READ_WRITE_TOKEN
			})

			cursor = result.cursor
			hasMore = result.hasMore
			iterations++

			posts.push(
				...(await Promise.all(
					result.blobs.map(async blob => {
						const rawContent = await getBlobContent(blob.url)

						const { metadata, content } = parseFrontmatter(rawContent)

						return {
							content,
							metadata,
							slug: blob.pathname
						}
					})
				))
			)

			await new Promise(resolve => setTimeout(resolve, 8000))
		}
	} else {
		const result = await list({
			limit,
			token: process.env.BLOG_READ_WRITE_TOKEN
		})

		posts = await Promise.all(
			result.blobs.map(async blob => {
				const rawContent = await getBlobContent(blob.url)

				const { metadata, content } = parseFrontmatter(rawContent)

				return {
					content,
					metadata,
					slug: blob.pathname
				}
			})
		)
	}

	return posts
}
