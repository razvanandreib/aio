import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string(),
    date: z.string(),
    image: z.string(),
    title: z.string(),
  }),
});

export const collections = {
  posts: blogCollection, //blog should matched the name of the folder from content for blog in this example
};
