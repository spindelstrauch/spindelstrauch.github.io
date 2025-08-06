import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.array(z.string()),
    detail: z.string(),
    thumbnail: z.string().optional(),
    images: z.array(z.string()).optional(),
    imageslayout: z.string().optional(),
    url: z
      .union([z.string().url(), z.literal('非公開'), z.literal('準備中'), z.literal('公開終了')])
      .optional(),
    role: z.array(z.string()).optional(),
    tools: z.array(z.string()).optional(),
    design: z.array(z.string()).optional(),
    stylesheets: z.array(z.string()).optional(),
    jsfiles: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};
