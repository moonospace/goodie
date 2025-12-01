type GeneratedMetadataInput = {
  title: string;
  description: string;
  image?: string;
};

export function generatedMetadata({
  title,
  description,
  image,
}: GeneratedMetadataInput):
  | (
      | React.DetailedHTMLProps<
          React.MetaHTMLAttributes<HTMLMetaElement>,
          HTMLMetaElement
        >
      | undefined
    )[]
  | undefined {
  return [
    { title },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content:
        "Product, Indie Hacker, Designer, Developer, Resources, Tools, Collections",
    },
    { name: "creator", content: "nyomansunima" },
    { name: "publisher", content: "nyomansunima" },
    { name: "application-name", content: "Nyoman Sunima" },
    {
      name: "google-site-verification",
      content: "mfiO4Ks8AAKeOhiUkYt80WAC5AluXKIkw9GN2Q9ObuY",
    },
    { name: "category", content: "Websites" },
    { name: "generator", content: "Tanstack Start" },
    { name: "pinterest-rich-pin", content: "true" },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764576823183/35e277d5-cbcf-4dc9-a1a2-403ea2deced6.png",
    },
    { name: "og:locale", content: "en_US" },
    { name: "og:type", content: "website" },

    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "nyomansunima" },
    { name: "twitter:creator", content: "@nyomansunima" },
    {
      name: "twitter:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764576823183/35e277d5-cbcf-4dc9-a1a2-403ea2deced6.png",
    },
  ];
}
