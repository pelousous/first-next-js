import { readFile, readdir } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getReview(slug: string) {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);

  const body = marked(content);

  return { title, date, image, slug, body };
}

export async function getFeatured() {
  const reviews = await getReviews();
  return reviews[0];
}

export async function getReviews() {
  const files = await readdir("./content/reviews");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));

  const reviews = [];

  for (const slug of slugs) {
    const review = await getReview(slug);

    reviews.push(review);
  }

  return reviews.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getSlugs() {
  const files = await readdir("./content/reviews");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));

  return slugs.map((slug) => {
    return { slug };
  });
}
