import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const post = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      coverStyle: z.optional(z.array(z.string())).default([]),
      itemStyle: z.optional(z.array(z.string())).default([]),
    }),
});

export const collections = { post };
