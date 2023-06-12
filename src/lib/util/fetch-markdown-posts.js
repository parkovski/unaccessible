export default async function fetchMarkdownPosts() {
  // Note this sketchy escape. This is the only way this works due to some vite
  // or rollup bugs. Things that don't work: '()', '\\()'
  const files = import.meta.glob(`/src/routes/\(default)/updates/*.mdx`);

  return await Promise.all(
    Object.entries(files).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: path.slice('/src/routes/(default)'.length, -'.mdx'.length),
      };
    })
  );
}
