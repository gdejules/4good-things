import type { ImageMetadata } from "astro";

export interface ImageAsset {
  src: ImageMetadata;
  alt: string;
}

export interface Product {
  slug: string;
  name: string;
  category: "smaller-things" | "larger-things";
  description: string;
  recycledWeight: string;
  price: number;
  length: string;
  width: string;
  diameter: string;
  height: string;
  volume: string;
  thickness: string;
  images: ImageAsset[];
  featured: boolean;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  type: "collaborathing" | "b2b";
  materialSource: string;
  recycledWeight: string;
  description: string;
  images: ImageAsset[];
  featured: boolean;
}

export interface Stat {
  value: number;
  unit: string;
  label: string;
  source?: string;
}

export interface ColorSwatch {
  name: string;
  hex?: string;
  textureImage: ImageAsset;
  available: boolean;
}
