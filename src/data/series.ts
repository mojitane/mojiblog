interface Series {
  title: string;
  slug: string;
  description: string;
  image?: string;
}
interface SeriesConfig {
    [key: string]: Series
}

export const seriesConfig = {
  midweekByte: {
    title: "Midweek Byte",
    slug: "midweekByte",
    description: "Weekly small topics",
  },
  differentSeries: {
    title: "Midweek Byte",
    slug: "differentOne",
    description: "Weekly small topics",
  },
} satisfies SeriesConfig;
