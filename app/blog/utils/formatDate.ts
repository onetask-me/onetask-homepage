const AppBlogUtilsFormatDate = (date: string) => {
	const currentDate = new Date()

	let correctDate = date

	if (!correctDate.includes('T')) correctDate = `${correctDate}T00:00:00`

	const targetDate = new Date(correctDate)

	const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
	const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
	const daysAgo = currentDate.getDate() - targetDate.getDate()

	let formattedDate = ''

	if (yearsAgo > 0) formattedDate = `${yearsAgo}y ago`
	else if (monthsAgo > 0) formattedDate = `${monthsAgo}mo ago`
	else if (daysAgo > 0) formattedDate = `${daysAgo}d ago`
	else formattedDate = 'Today'

	const fullDate = targetDate.toLocaleString('en-us', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	})

	return `${fullDate} (${formattedDate})`
}

export default AppBlogUtilsFormatDate
