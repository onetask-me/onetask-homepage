import Image from 'next/image'

const AppBlogComponentsAuthor = ({ author }) => (
	<div className='relative flex items-center gap-x-4'>
		<div className='relative h-10 w-10 overflow-hidden rounded-full bg-gray-800'>
			{author.image && author.image !== 'undefined' && (
				<Image
					src={`/${author.image}`}
					alt={author.name}
					width={60}
					height={60}
					className='object-cover'
				/>
			)}
		</div>

		<div className='text-sm'>
			<div className='font-semibold text-neutral-800 dark:text-neutral-100 leading-tight'>
				{author.name}
			</div>

			<div className='text-neutral-400 leading-tight'>{author.title}</div>
		</div>
	</div>
)

export default AppBlogComponentsAuthor
