// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    // Opcional: añade más campos si los necesitas
    description: z.string().optional(),
    image: z.string().optional(),
    author: z.string().optional()
  })
});

export const collections = {
  blog: blogCollection,
};