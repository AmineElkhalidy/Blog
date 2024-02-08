import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2023-05-23",
  dataset: "production",
  projectId: "z8kx0zre",
  useCdn: false,
});

// Convert image object of the blog document to URL
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
