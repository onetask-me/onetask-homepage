import { CTA } from '@/components/cta'
import Author from '@blog/components/author'
import { CustomMDX } from '@blog/components/mdx'
import { authors, blog } from '@blog/config'
import { getBlogPosts } from '@blog/data'
import formatDate from '@blog/utils/formatDate'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const generateMetadata = async ({
	params
}): Promise<Metadata | undefined> => {
	const posts = await getBlogPosts({ slug: params.slug })

	const post = posts.find(post => post.slug === params.slug)

	if (!post) return

	const { title, publishedAt, summary, image } = post.metadata

	const ogImage = image ? image : `${blog.url}/og?title=${title}`

	return {
		title,
		description: summary,
		openGraph: {
			title,
			description: summary,
			type: 'article',
			publishedTime: publishedAt,
			url: `${blog.url}/${post.slug}`,
			images: [{ url: ogImage }]
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description: summary,
			images: [ogImage]
		}
	}
}

const AppBlogSlugPage = async ({ params }) => {
	const posts = await getBlogPosts({ slug: params.slug })

	const post = posts.find(post => post.slug === params.slug)

	if (!post) redirect('/')

	return (
		<section className='grid mx-auto mt-8 animate-fade-in-text delay-800'>
			<script
				type='application/ld+json'
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? post.metadata.image
							: `${blog.url}/og?title=${post.metadata.title}`,
						url: `${blog.url}/${post.slug}`,
						author: {
							'@type': 'Person',
							name:
								authors.find(author => author.name === post.metadata.author) ??
								blog.name
						}
					})
				}}
			/>

			<div className='relative w-full max-w-2xl mx-auto'>
				{post.metadata.publishedAt && (
					<p className='my-2 text-sm text-neutral-400'>
						{formatDate(post.metadata.publishedAt)}
					</p>
				)}

				<h1 className='text-5xl font-extrabold tracking-tight title'>
					{post.metadata.title}
				</h1>

				<p className='my-2 text-lg text-neutral-400'>{post.metadata.summary}</p>

				{authors.some(author => author.name === post.metadata.author) && (
					<div className='mt-4 mb-6 '>
						<Author
							author={authors.find(
								author => author.name === post.metadata.author
							)}
						/>
					</div>
				)}

				<Link
					className='flex justify-center my-8 text-xs cursor-pointer text-neutral-400'
					href='/blog'
				>
					← Back to blog
				</Link>

				{post.metadata.image && post.metadata.image !== 'undefined' && (
					<div
						className='relative w-full max-w-2xl mx-auto h-96 my-8'
						style={{ maxWidth: '800px', height: '400px' }}
					>
						<Image
							src={post.metadata.image}
							alt={`Cover Image for ${post.metadata.title}`}
							className='object-cover rounded-2xl'
							fill
							sizes='(max-width: 768px) 50vw, 30vw'
						/>
					</div>
				)}
			</div>

			{post.metadata.introduction ? (
				<article className='max-w-2xl mx-auto my-8 border-t-4 border-b-4 border-cyan-500'>
					<CustomMDX source={`> ${post.metadata.introduction}`} />
				</article>
			) : null}

			<article className='max-w-2xl mx-auto'>
				<CustomMDX source={post.content} />
			</article>

			<Link
				className='flex justify-center text-xs cursor-pointer text-neutral-400'
				href='/blog'
			>
				← Back to blog
			</Link>

			<div className='mt-16'>
				<CTA />
			</div>
		</section>
	)
}

export default AppBlogSlugPage
