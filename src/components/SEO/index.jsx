function SEO({
  title = `Hookpedia: A cola definitiva para desenvolvedores React.`,
}) {
  return (
    <>
      <meta property="og:locale" content="pt_BR"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content={title}></meta>
      <meta
        property="og:description"
        content="Hookpedia é uma uma fábrica de receitas de Hooks do React, criado pela comunidade para a comunidade."
      ></meta>
      <meta
        name="description"
        content="Hookpedia é uma uma fábrica de receitas de Hooks do React, criado pela comunidade para a comunidade."
      ></meta>

      <meta property="og:site_name" content="Hookpedia"></meta>
      <meta
        property="og:image"
        content={"https://hookpedia.vercel.app/hookpedia.png"}
      ></meta>
      <meta
        property="og:image:secure_url"
        content={"https://hookpedia.vercel.app/"}
      ></meta>
      <meta property="og:image:type" content="image/png"></meta>
      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta
        name="twitter:image"
        content={"https://hookpedia.vercel.app/hookpedia.png"}
      ></meta>
    </>
  );
}

export { SEO };
