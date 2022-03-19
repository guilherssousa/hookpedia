import matter from "gray-matter";
import marked from "marked";

export async function getAllHooks() {
  const context = require.context("../_hooks", false, /\.md$/);
  const hooks = [];

  for (const key of context.keys()) {
    const post = key.slice(2);

    // TODO: fix "/ges/" bug.
    if (post.includes("ges/")) continue;

    const content = await import(`../_hooks/${post}`);
    const meta = matter(content.default);

    hooks.push({
      slug: post.replace(".md", ""),
      title: meta.data.title,
    });
  }

  return hooks;
}

export async function getHookBySlug(slug) {
  const fileContent = await import(`../_hooks/${slug}.md`);

  const meta = matter(fileContent.default);
  const content = marked(meta.content);

  return {
    title: meta.data.title,
    content,
  };
}
