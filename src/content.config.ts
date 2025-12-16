import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const files = defineCollection({
  loader: file("src/data/files.json")
});

export const collections = { files };