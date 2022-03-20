import matter from "gray-matter";

export async function getAllHooks() {
  const context = require.context("../_hooks", false, /\.md$/);
  const hooks = [];

  for (const key of context.keys()) {
    const post = key.slice(2);

    // TODO: fix "/ges/" bug.
    if (post.includes("ges/")) continue;

    const content = await import(`../_hooks/${post}`);
    const meta = matter(content.default);

    // remove all markdown from meta.content;
    const description = meta.content.replace(/<[^>]*>/g, "");

    hooks.push({
      slug: post.replace(".md", ""),
      title: meta.data.title,
      description,
    });
  }

  return hooks;
}

export async function getHookBySlug(slug) {
  const fileContent = await import(`../_hooks/${slug}.md`);

  const meta = matter(fileContent.default);

  return {
    ...meta.data,
    content: meta.content,
  };
}

export default async function handler(req, res) {
  const hooks = await getAllHooks();

  return res.json(
    hooks.map((hook) => {
      return {
        title: hook.title,
        slug: hook.slug,
      };
    })
  );
}
