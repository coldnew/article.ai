import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    topic: z.string(),
    sourceType: z.enum(['paper', 'patent']).default('paper'),
    sourceUrl: z.string().url(),
    sourceBackup: z.string().optional(),
    authors: z.array(z.string()).default([]),
    venue: z.string().optional(),
    tags: z.array(z.string()),
    readTime: z.string(),
    evidence: z.enum(['高', '中', '探索中']),
    featured: z.boolean().default(false),
    sourceCount: z.number().default(0),
    accent: z.string().default('coral'),
  }),
});

export const collections = { articles };
