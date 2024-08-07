import config from '@blog/config'

const AppRobots = () => {
	return {
		rules: [{ userAgent: '*' }],
		sitemap: `${config.blog.homepage}/sitemap.xml`
	}
}

export default AppRobots
