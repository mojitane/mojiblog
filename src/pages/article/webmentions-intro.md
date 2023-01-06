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

Webmentions [webmention.io](https://webmention.io/) are a way to bring social activity and interactivity to your site without having it on your platform itself or needing to have complex systems in place.  
Harness the <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-orange-300 to-red-400 font-semibold">activity, audience, and functionality from existing platform</span> and don't split audiences.

Using webmention.io, a crawler will find any and all mentions of your content on selected networks like Twitter and collect them for your usage. It will also
1. Verify the linking
2. Parse Microformats
3. Interpret them as likes, reply, etc.
Then all thats left is you retrieving them to display.

If you think this sounds like good ol' pingbacks that is not by chance. Webmentions are basically a replacement and improvement on that idea.

![Screenshot of webmention.io login screen](/webmention1.png)

To enable collection, all that's needed is adding a few tags to the head of every page it should be active at, and you are done.

```html
<link rel="webmention" href="https://webmention.io/username/webmention" />
<link rel="pingback" href="https://webmention.io/username/xmlrpc" />
```

For some CMS like WordPress, there are even plugins available doing that part.

## Signing in

Next and the last step for setting everything up is logging in. This can be a little bit confusing at first.
At [webmention.io](https://webmention.io/) enter your site url.

Next, you have around a [dozen of different ways](https://indielogin.com/setup) to confirm that you are indeed the owner of that website.
I found authenticating by Twitter and GitHub to be easiest.

![Screenshot of webmention.io login screen](/webmention2.png)

The steps are basically:
1. Adding a `rel="me"` to a tag linking to your respective profile 
2. And also mentioning your site's name on that profile.
If everything works fine, you have now the option to use this as an authentication provider. And – <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-orange-300 to-red-400 font-semibold">we are in</span> 🥸.

Now the world is your oyster to use this data for yourself or to display on the relevant sites.

## What is missing?

While webmentions are an incredible easy way to utilize activity from other platforms and make your own site feel more fun and alive. What it can't do is foster your own community.  
So, if growing a personal following that will outlive any social network is a goal, then webmentions could be a part of that, but not the solution.

## <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-orange-300 to-red-400 font-semibold">Implementing webmentions</span>

Webmentions can be seen in action wonderfully on [Adam Argyle's nerdy.dev](https://nerdy.dev/gradients-going-the-shorter-longer-increasing-or-decreasing-route#comments).  
Lets see if we can do the same.

💡🔧 **Tune in next week on how to include and display Webmentions in this 2 part series**.