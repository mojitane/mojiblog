interface PostTypes {
  title: string;
  slug: string;
  description: string;
  image?: string;
}
interface PostTypesConfig {
  [key: string]: PostTypes;
}

export const postTypesConfig = {
  article: {
    title: "Article",
    slug: "article",
    description: "",
  },
  byte: {
    title: "Byte",
    slug: "byte",
    description: "",
  },
} satisfies PostTypesConfig;
