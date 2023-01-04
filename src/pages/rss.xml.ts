import rss from '@astrojs/rss';
import { siteConfig } from 'src/data/settings';


export const get = () =>
	rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: import.meta.glob('./article/**/*.{md,mdx}'),
		customData: `<language>en-us</language>`,
		drafts: false
	});
