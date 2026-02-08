import { type Metadata } from "next";

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function ProjectsPage() {
  const client = createClient();
  const page = await client.getByUID("page", "projects");

  // <SliceZone> renders the page's slices.
  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", "projects");

  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}
