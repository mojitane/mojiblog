interface Tag {
    title: string,
    slug: string,
    description: string,
    color: string,
    gradient: string,
  }
  interface TagsConfig {
      [key: string]: Tag
  }
  
  export const tagsConfig = {
    "dev-talk": {
        title: "dev talk",
        description: "",
        slug: "dev-talk",
        color: "purple-300",
        gradient: "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
    },
    work: {
        title: "work",
        description: "",
        slug: "work",
        color: "green-500",
        gradient: "bg-gradient-to-r from-yellow-200 via-green-200 to-green-500",
    },
    astro: {
        title: "astro",
        description: "",
        slug: "astro",
        color: "orange-400",
        gradient: "bg-gradient-to-r from-rose-400 to-orange-300",
    },
  } satisfies TagsConfig;
  