'use client'

import Author from '@blog/components/author'
import { authors } from '@blog/config'
import type { Metadata } from '@blog/data'
import formatDate from '@blog/utils/formatDate'
import { createClient } from '@vercel/kv'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import * as React from 'react'

const POSTS_PER_PAGE = 9

export const maxDuration = 300

const fetchPosts = async (page: number) => {
	const kv = createClient({
		url: process.env.BLOG_METADATA_REST_API_URL!,
		token: process.env.BLOG_METADATA_REST_API_TOKEN!
	})

	const slugs: string[] = (await kv.get('post:slugsbydate')) ?? []

	// Sort posts by date in descending order
	const sortedSlugs = slugs.sort((a: string, b: string) => (a > b ? -1 : 1))

	const totalPosts = sortedSlugs.length
	const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)
	const start = (page - 1) * POSTS_PER_PAGE
	const end = start + POSTS_PER_PAGE

	const paginatedPosts = slugs.slice(start, end).map(slug => slug.slice(11))

	// Fetch metadata for all slugs
	const posts = await Promise.all(
		paginatedPosts.map(async slug => {
			const postMetadata = await kv.get<Metadata>(`post:metadata:${slug}`)

			return {
				slug,
				metadata: postMetadata ?? {}
			}
		})
	)

	return { posts, totalPages }
}

const PostsList = ({ page }: { page: number }) => {
	const [posts, setPosts] = React.useState<any[]>([])
	const [totalPages, setTotalPages] = React.useState(0)
	const router = useRouter()

	React.useEffect(() => {
		const loadPosts = async () => {
			const { posts, totalPages } = await fetchPosts(page)
			setPosts(posts)
			setTotalPages(totalPages)
		}
		loadPosts()
	}, [page])

	return (
		<div>
			<section className='grid grid-cols-1 gap-16 mx-auto mt-8 animate-fade-in-text delay-800 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
				{posts
					.sort((a, b) =>
						new Date(a.metadata.publishedAt!) >
						new Date(b.metadata.publishedAt!)
							? -1
							: 1
					)
					.map(post => (
						<article key={post.slug} className='flex flex-col items-start'>
							<div className='relative w-full'>
								<div className='relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-800'>
									{post.metadata.image &&
										post.metadata.image !== 'undefined' && (
											<Image
												fill
												src={post.metadata.image}
												alt={`Cover Image for ${post.metadata.title}`}
												sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
												className='object-cover h-full'
											/>
										)}
								</div>

								<Link
									href={`/blog/${post.slug}`}
									className='absolute inset-0 rounded-2xl ring-1 ring-inset cursor-pointer ring-gray-900/10 dark:ring-white/10'
								/>
							</div>

							<div className='max-w-xl'>
								<div className='flex gap-x-4 items-center mt-8 text-xs'>
									<time
										dateTime={new Date(
											post.metadata.publishedAt!
										).toISOString()}
										className='text-primary dark:text-white'
									>
										{formatDate(post.metadata.publishedAt!)}
									</time>
								</div>

								<div className='relative group'>
									<h3 className='mt-3 text-2xl font-extrabold leading-6 text-neutral-800 dark:text-neutral-100'>
										<Link href={`/blog/${post.slug}`}>
											{post.metadata.title}
										</Link>
									</h3>

									<p className='mt-2 text-sm leading-relaxed line-clamp-3 text-secondary'>
										{post.metadata.summary}
									</p>
								</div>

								{authors.some(
									author => author.name === post.metadata.author
								) && (
									<div className='mt-6'>
										<Author
											author={authors.find(
												author => author.name === post.metadata.author
											)}
										/>
									</div>
								)}
							</div>
						</article>
					))}
			</section>

			<div className='flex justify-between my-16'>
				{page > 1 ? (
					<button
						onClick={() => router.push(`/blog?page=${page - 1}`)}
						className='px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md'
					>
						Previous
					</button>
				) : (
					<div />
				)}

				{page < totalPages && (
					<button
						onClick={() => router.push(`/blog?page=${page + 1}`)}
						className='px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md'
					>
						Next
					</button>
				)}
			</div>
		</div>
	)
}

const AppBlogPage = () => {
	const searchParams = useSearchParams()

	const page = Number(searchParams?.get('page') ?? '1')

	return (
		<div className='w-full mx-auto max-w-[1500px] px-4'>
			<React.Suspense fallback={<p>Loading posts...</p>}>
				<PostsList page={page} />
			</React.Suspense>
		</div>
	)
}

export default AppBlogPage
