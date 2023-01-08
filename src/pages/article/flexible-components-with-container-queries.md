---
layout: "../../layouts/Article.astro"
title: "Removing complexity with container size queries"
description: "📦 Container Size Queries in CSS are exceptionally helpful when building dashboards. Especially when they are user configurable. Lets reuse the same component for different configurations."
pubDate: "2023-01-08"
heroImage: "/container-queries.png"
heroImageCredit: ""
heroAlt: "Photo of a dashboard containing the same component twice in two different size configurations, using container size queries"
thumbnail: "/container-queries-2.png"
thumbnailCredit: ""
thumbnailAlt: "Photo of a dashboard containing the same component twice in two different size configurations, using container size queries"
tags: ["byte"]
draft: false
pinned: true
featured: true
---
📦 Container Size Queries in CSS are exceptionally helpful when building dashboards. Especially when they are user configurable. Imagine a scenario where the same component can be placed multiple times, displaying different information and having different column-span settings. Or just being used in the sidebar as well as in the main content area depending on the page.

Here we use the same component in two different places with different column-span. They show us information in different formats:

<iframe style="width:100%; height: 700px;" src="https://stackblitz.com/edit/typescript-8ew4k7?embed=1&file=style.css&hideExplorer=1&hideNavigation=1&view=preview" />

Up until now, with media queries, we could not have solved this easily. Our styling would apply to all instances of the component on the page equally and could not handle sizing dependent on placement. This would require complex classes that get set or removed and would trigger mobile styling earlier on larger uses..

✅ Lets use a container query and define the container type. Figuring out where to set a container type like `container-type: inline-size` can be a challenge when creating the component.

```css
.item {
  background-color: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: var(--shadow-elevation-medium);
  container-type: inline-size;
}

@container (min-width: 400px) {
  .shipping__line {
    flex-wrap: wrap;
    border: 2px solid #f1cffc;
    border-radius: 6px;
    padding: 1rem;
    gap: 1rem;
    text-align: center;
  }
}
```

Extending this a little bit more we can easily build our multi-use dashboard components – and not worry about device size & adding and removing complex extra classes.

There is also the possiblity to use **style queries** in addition, to offer even more flexiblity to the user without much effort. [Ahmad Shadeed](https://ishadeed.com/article/css-container-style-queries/) has written a fantastic article on that with quite a lot of use cases and examples.

