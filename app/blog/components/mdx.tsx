import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { highlight } from 'sugar-high'

function Table({ data }) {
	const headers = data.headers.map((header, index) => (
		<th key={index}>{header}</th>
	))
	const rows = data.rows.map((row, index) => (
		<tr key={index}>
			{row.map((cell, cellIndex) => (
				<td key={cellIndex}>{cell}</td>
			))}
		</tr>
	))

	return (
		<table>
			<thead>
				<tr>{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	)
}

function CustomLink(props) {
	const href = props.href

	if (href.startsWith('/'))
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		)

	if (href.startsWith('#')) return <a {...props} />

	return <a target='_blank' rel='noopener noreferrer' {...props} />
}

function RoundedImage(props) {
	return <Image alt={props.alt} className='rounded-lg' {...props} />
}

function Callout(props) {
	return (
		<div className='flex items-center p-1 px-4 py-3 mb-8 text-sm rounded border border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100'>
			<div className='flex items-center mr-4 w-4'>{props.emoji}</div>
			<div className='w-full callout'>{props.children}</div>
		</div>
	)
}

function ProsCard({ title, pros }) {
	return (
		<div className='p-6 my-4 w-full rounded-xl border border-emerald-900 bg-neutral-900'>
			<span>{`You might use ${title} if...`}</span>
			<div className='mt-4'>
				{pros.map(pro => (
					<div key={pro} className='flex items-baseline mb-2 font-medium'>
						<div className='mr-2 w-4 h-4'>
							<svg className='w-4 h-4 text-emerald-500' viewBox='0 0 24 24'>
								<title>Card</title>
								<g
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
									<path d='M22 4L12 14.01l-3-3' />
								</g>
							</svg>
						</div>
						<span>{pro}</span>
					</div>
				))}
			</div>
		</div>
	)
}

function ConsCard({ title, cons }) {
	return (
		<div className='p-6 my-6 w-full rounded-xl border border-red-900 bg-neutral-900'>
			<span>{`You might not use ${title} if...`}</span>
			<div className='mt-4'>
				{cons.map(con => (
					<div key={con} className='flex items-baseline mb-2 font-medium'>
						<div className='mr-2 w-4 h-4'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='w-4 h-4 text-red-500'
							>
								<title>Card</title>
								<path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
							</svg>
						</div>
						<span>{con}</span>
					</div>
				))}
			</div>
		</div>
	)
}

function Code({ children, ...props }) {
	const codeHTML = highlight(children)
	return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
	return str
		.toString()
		.toLowerCase()
		.trim() // Remove whitespace from both ends of a string
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/&/g, '-and-') // Replace & with 'and'
		.replace(/[^\w-]+/g, '') // Remove all non-word characters except for -
		.replace(/--+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
	const Heading = ({ children }) => {
		const slug = slugify(children)
		return React.createElement(
			`h${level}`,
			{ id: slug },
			React.createElement('a', {
				href: `#${slug}`,
				key: `link-${slug}`,
				className: 'anchor'
			}),
			children
		)
	}
	Heading.displayName = `Heading${level}`
	return Heading
}

const components = {
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	h6: createHeading(6),
	Image: RoundedImage,
	a: CustomLink,
	Callout,
	ProsCard,
	ConsCard,
	code: Code,
	Table
}

export function CustomMDX(props) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
		/>
	)
}
