import { cn } from '@/lib/utils'
import Image from 'next/image'

import { Heading } from './heading'
import { Subheading } from './subheading'

export const Testimonials = () => {
	return (
		<div className='relative z-20 py-10 md:py-40'>
			<Heading as='h2'>Loved by people from all over the universe</Heading>

			<Subheading className='text-center max-w-lg mx-auto'>
				But by Earthlings in particular.
			</Subheading>

			<TestimonialGrid />
		</div>
	)
}

const Avatar = ({
	image,
	name,
	profession
}: {
	image: string
	name: string
	profession: string
}) => (
	<div className='mt-8'>
		<div className='flex items-center space-x-3'>
			{image && (
				<div className='flex-shrink-0 overflow-hidden rounded-full w-14 h-14 relative'>
					<Image src={image} alt='Avatar' fill />
				</div>
			)}

			<div className='flex flex-col justify-center'>
				<div className='m-0 p-0 text-lg font-semibold text-black dark:text-white'>
					{name}
				</div>

				<div className='m-0 p-0 text-sm text-muted'>{profession}</div>
			</div>
		</div>

		<div className='mt-8 max-w-xs relative'>
			<Image
				src='/5-star-rating.svg'
				width='240'
				height='40'
				alt='5-star rating'
			/>
		</div>
	</div>
)

const Mark = ({
	className,
	children
}: {
	className: string
	children: React.ReactNode
}) => (
	<mark
		className={cn(
			'text-white font-medium px-2 py-0.5 mx-0.5 rounded-lg bg-gradient-to-br',
			className
		)}
	>
		{children}
	</mark>
)
const Testimonial = ({
	photo,
	profession,
	quote,
	quotee
}: {
	photo: string
	profession: string
	quote: React.ReactNode
	quotee: string
}) => (
	<div className='relative flex flex-col justify-between w-full h-full bg-white dark:bg-zinc-950 px-8 md:px-14 rounded-2xl shadow-2xl dark:shadow-white/20 py-14'>
		<div className='text-2xl leading-normal '>{quote}</div>

		<Avatar image={photo} name={quotee} profession={profession} />

		<div
			className='absolute inset-0 w-full h-full rounded-2xl opacity-10 bg-noise fade-vignette [mask-image:radial-gradient(#fff,transparent,75%)]'
			style={{
				backgroundImage: 'url(/noise.webp)',
				backgroundSize: '30%'
			}}
		/>
	</div>
)

const TestimonialGrid = () => (
	<div className='relative py-16 px-4'>
		<div className='max-w-7xl mx-auto text-2xl font-normal grid grid-cols-1 md:grid-cols-2 justify-items-center gap-32'>
			<Testimonial
				photo='/testimonial-1.jpg'
				profession='Software developer'
				quote={
					<>
						The first task list that has truly excited me. I get a{' '}
						<Mark className='from-green-400 via-blue-500 to-indigo-600'>
							huge sense of satisfaction
						</Mark>
						using this app, and it is amazing at how well it helps me to
						prioritize my tasks. Absolutely revolutionary.
					</>
				}
				quotee='Anthony McGrath'
			/>

			<Testimonial
				photo='/testimonial-3.jpg'
				profession='Author'
				quote={
					<>
						As a creative, I need tools to help me to know what to prioritize.
						The app helps me a lot with its clean user interface and the app
						does some{' '}
						<Mark className='from-fuchsia-500 via-pink-500 to-purple-600'>
							incredibly magic calculations
						</Mark>{' '}
						to show me my most important tasks.
					</>
				}
				quotee='Philippe Ruaudel'
			/>

			<Testimonial
				photo='/testimonial-4.jpg'
				profession='Author'
				quote={
					<>
						Like{' '}
						<Mark className='from-purple-500 via-cyan-500 to-lime-600'>
							Notion for tasks
						</Mark>{' '}
						and incredibly helpful. A game-changer...
						<Mark className='from-yellow-500 via-orange-500 to-red-600'>
							a life-changer!
						</Mark>
					</>
				}
				quotee='Rizala Carrington'
			/>

			<Testimonial
				photo='/testimonial-2.jpg'
				profession='Coach'
				quote={
					<>
						I’ll finally use a{' '}
						<Mark className='from-lime-400 via-blue-500 to-cyan-400'>
							to-do app
						</Mark>{' '}
						🎉
					</>
				}
				quotee='Diane MalletteBiz'
			/>
		</div>
	</div>
)
