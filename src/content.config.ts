// src/content/config.ts
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      category: z.enum(["smaller-things", "larger-things"]),
      description: z.string(),
      recycledWeight: z.string(), // e.g. "1 kg"
      price: z.number(), // IDR
      length: z.string().optional(),
      width: z.string().optional(),
      diameter: z.string().optional(),
      height: z.string().optional(),
      volume: z.string().optional(),
      thickness: z.string().optional(),
      images: z.array(
        z.object({
          src: image(),
          alt: z.string(),
        }),
      ),
      featured: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      type: z.enum(["Collaborathing", "General Project"]),
      materialSource: z.string(),
      recycledWeight: z.string(),
      description: z.string(),
      images: z.array(
        z.object({
          src: image(),
          alt: z.string(),
        }),
      ),
      featured: z.boolean().default(false),
    }),
});

const stats = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/stats" }),
  schema: z.object({
    value: z.number(),
    unit: z.string(),
    label: z.string(),
    source: z.string().optional(),
  }),
});

const colors = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/colors" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      textureImage: z.object({
        src: image(),
        alt: z.string(),
      }),
      available: z.boolean().default(false),
    }),
});

export const collections = { products, projects, stats, colors };
