---
layout: "../../layouts/Article.astro"
title: "Webmentions and the blogging void – part 1"
description: "Being social on your own platform is difficult. Comment systems are often underused and not where the real discussions happen – and for guestbooks to come back it might need a few more years. Webmentions can bridge the gap between your personal island and the outside world."
pubDate: "2023-01-06"
heroImage: "/void1.jpeg"
heroImageCredit: "Photo by CJ Dayrit on Unsplash"
heroAlt: "Modern architecture: Multiple archways with a dark void at the end."
thumbnail: "/void1.jpeg"
thumbnailCredit: "Photo by CJ Dayrit on Unsplash"
thumbnailAlt: "Modern architecture: Multiple archways with a dark void at the end."
tags: ["byte"]
draft: false
pinned: true
featured: true
---
Being social on your own platform is difficult. Comment systems are often underused and not where the real discussions happen – and for guestbooks to come back it might need a few more years. Webmentions can bridge the gap between your personal island and the outside world.

## What are webmentions?

Webmentions ([webmention.io](https://webmention.io/)) are a way to bring social activity and interactivity to your site without having it on your platform itself or needing to have complex systems in place.  
Harness the <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-orange-300 to-red-400 font-semibold">activity, audience, and functionality from existing platforms</span>.

Using webmention.io, all reported mentions of your content on networks like Twitter or other sites will be collected for your usage. This will:
1. Verify the linking
2. Parse Microformats
3. Interpret them as likes, reply, etc.
Then all thats left is you retrieving them to display.

If you think this sounds like good ol' pingbacks that is not by chance. Webmentions are basically a replacement and improvement on that idea and can work in tandem.

![Screenshot of webmention.io login screen](/webmention1.png)

To enable collection, all that's needed is adding a few tags to the head of every page it should be active at, and you are done.

```html
<link rel="webmention" href="https://webmention.io/username/webmention" />
<link rel="pingback" href="https://webmention.io/username/xmlrpc" />
```

For some CMS like WordPress, there are even plugins available doing that part.

## Signing in

Next and the last step for setting everything up for receiving mentions is logging in. This can be a little bit confusing at first.
At [webmention.io](https://webmention.io/) enter your site url.

Next, you have around a [half dozen of different ways](https://indielogin.com/setup) to confirm that you are indeed the owner of that website.
I found authenticating by Twitter and GitHub to be easiest.

![Screenshot of webmention.io login screen](/webmention2.png)

The steps are basically:
1. Adding a `rel="me"` to a tag linking to your respective profile 
2. And also mentioning your site's name on that profile.
If everything works fine, you have now the option to use this as an authentication provider. And – <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-orange-300 to-red-400 font-semibold">we are in</span> 🥸.

Now the world is your oyster to use this data for yourself or to display on the relevant sites.

## The crawler

Being ready for webmentions doesnt mean much when no one is sending them. While some platforms or plugins might do this automatically, there is also [brid.gy](https://brid.gy/) to help.  

![Screenshot of brid.gy crawler waiting to search twitter again](/webmention3.png)

> Bridgy periodically checks social networks for responses to your posts and links to your web site and sends them back to your site as webmentions. Bridgy also translates the responses to microformats so that your web site can fetch and parse them.
>
> Bridgy can also publish posts, comments, likes, and retweets from your web site to social networks. When you ask Bridgy to publish a post, it analyzes its microformats data and publishes it using the social network APIs.
>
> Connect your Twitter, Instagram or a number of other account types once and brid.gy will crawl them for free regularly for new mentions like replies or likes and send them your way.

Connect your Twitter, Instagram or a number of other account types once and brid.gy will <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-300 to-lime-400 font-semibold">crawl them for free regularly</span> for new mentions like replies or likes and send them your way.

## What is missing?

While webmentions are an incredible easy way to include activity from other platforms and make your own site feel more fun and alive. What it can't do is foster your own community.  
So, if growing a personal following that will outlive any social network is a goal, then webmentions could be a part of that, but not the solution.

## <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-orange-300 to-red-400 font-semibold">Implementing webmentions</span>

Webmentions can be seen in action wonderfully on [Adam Argyle's nerdy.dev](https://nerdy.dev/gradients-going-the-shorter-longer-increasing-or-decreasing-route#comments). Which was also the inspiration for including them on my own.  


💡🔧 <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-orange-300 to-red-400 font-semibold">Tune in next week on how to include and display Webmentions in this 2 part series</span>