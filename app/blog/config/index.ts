import { brand, domain, files } from './sources/d'

export const blog = {
	description: 'The smartest AI to-do app on the planet.', // SEO + OpenGraph description
	domain: 'onetask.me',
	homepage: 'https://onetask.me',
	name: 'OneTask', // Your brand name
	tagline: 'AI To-Do List', // Tagline below title
	title: 'OneTask Blog', // SEO + OpenGraph
	url: 'https://onetask.me/blog'
}

export const authors = [
	{
		name: 'Dominik Seroczynski',
		title: 'UX Design, OneTask',
		image: 'dominik.jpeg',
		specialty: 'design, UX'
	},
	{
		name: 'Martin Adams',
		title: 'Strategy/Vision, OneTask',
		image: 'martin.png',
		specialty: 'ceo, visioning, execution, ai, startup'
	},
	{
		name: 'Tyler Smith',
		title: 'Product/Engineering, OneTask',
		image: 'tyler.png',
		specialty: 'product, engineering, product management'
	},
	{
		name: 'Carlos Hernandez',
		title: 'Engineering, OneTask',
		image: 'carlos.jpg',
		specialty: 'engineering, coding, apps'
	},
	{
		name: 'Ryan Leahy',
		title: 'Operations, OneTask',
		image: 'ryan.jpeg',
		specialty: 'operations, planning, strategy, administration'
	}
]

export const seo = {
	brand,
	domain,
	files
}

export default { authors, blog, seo }
