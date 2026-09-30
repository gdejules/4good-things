import { getCollection, type CollectionEntry } from "astro:content";

type ProjectEntry = CollectionEntry<"projects">;
export type Project = ProjectEntry["data"] & {
  slug: string;
  entry: ProjectEntry; // Include the raw entry for render()
};

function slugFromEntry(entry: ProjectEntry): string {
  return entry.id.replace(/\.(md|mdx)$/, "");
}

export async function getProjects(): Promise<Project[]> {
  const entries = await getCollection("projects");
  return entries.map((entry: ProjectEntry) => ({
    slug: slugFromEntry(entry),
    ...entry.data,
    entry, // Retain raw collection entry reference
  }));
}
