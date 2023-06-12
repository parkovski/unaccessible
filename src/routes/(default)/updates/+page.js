export async function load({ fetch }) {
  const response = await fetch('/api/updates');
  const posts = await response.json();
  return { posts };
}
