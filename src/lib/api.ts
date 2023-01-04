import type { postTypesConfig } from "src/data/postTypes";
import type { seriesConfig } from "src/data/series";
import type { tagsConfig } from "src/data/tags";
import type { DeepReadonly } from "ts-essentials";

interface MarkdownInstance<T extends Record<string, any>> {
  /* Any data specified in this file's YAML frontmatter */
  frontmatter: T;
  /* The file path of this file */
  file: string;
  /* The rendered path of this file */
  url: string | undefined;
  /* Astro Component that renders the contents of this file */
  Content: any;
  /* Function that returns an array of the h1...h6 elements in this file */
  getHeadings(): Promise<{ depth: number; slug: string; text: string }[]>;
}

export interface PostFrontmatter {
    title: string
    description: string
    pubDate: string
    heroImage: string
    heroImageCredit: string
    heroAlt: string
    thumbnail: string
    thumbnailCredit: string
    thumbnailAlt: string
    tags: (keyof typeof tagsConfig)[]
    series?: keyof typeof seriesConfig
    type: keyof typeof postTypesConfig
    draft: boolean
    pinned: boolean
    featured: boolean
    // persona: "" | ""
}
export type MarkdownPost = MarkdownInstance<PostFrontmatter>
const mode = import.meta.env.MODE as "development" | "production";

export const Posts = (posts: DeepReadonly<MarkdownPost[]>) => {
  let state = [...posts];    

  const actions = {
    getPosts: () => {
      return state as DeepReadonly<typeof state>;
    },
    isPublished: () => {
      state = state.filter((post) => mode === "production" ? !post.frontmatter.draft : true);
      return actions;
    },
    sortPostsDesc: () => {
      state.sort((a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf())
      return actions;
    },
    sortPostsAsc: () => {
      state.sort((a, b) => new Date(a.frontmatter.pubDate).valueOf() - new Date(b.frontmatter.pubDate).valueOf())
      return actions;
    },
    isFeatured: () => {
      state = state.filter((post) => post.frontmatter.featured);
      return actions;
    },
    isPinned: () => {
      state = state.filter((post) => post.frontmatter.pinned);
      return actions;
    },
    hasTags: (filterTags: (keyof typeof tagsConfig)[] | keyof typeof tagsConfig) => {
      state = state.filter((post) => {
        return post.frontmatter.tags.filter(PostTag => filterTags.includes(PostTag)).length
      })
      return actions;
    }
  }
  return actions;
}