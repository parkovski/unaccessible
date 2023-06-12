import fetchMarkdownPosts from '$lib/util/fetch-markdown-posts.js';
import { json } from '@sveltejs/kit';

export async function GET() {
  const posts = await fetchMarkdownPosts();
  const sortedPosts = posts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
  return json(sortedPosts);
}
