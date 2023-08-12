import { RouterContext, Status } from "../deps.ts";

export const LgtmImageController = () => {
  const index = async (ctx: RouterContext<"/lgtm">) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "image/webp";

    const urls = [
      new URL(
        "../../images/lgtm/IMG_20230802_211536_631.webp",
        import.meta.url,
      ),
      new URL(
        "../../images/lgtm/IMG_20230802_212113_456.webp",
        import.meta.url,
      ),
      new URL(
        "../../images/lgtm/IMG_20230802_212426_794.webp",
        import.meta.url,
      ),
      new URL(
        "../../images/lgtm/IMG_20230802_212645_805.webp",
        import.meta.url,
      ),
      new URL(
        "../../images/lgtm/IMG_20230802_213216_418.webp",
        import.meta.url,
      ),
      new URL(
        "../../images/lgtm/IMG_20230802_213456_028.webp",
        import.meta.url,
      ),
    ];

    const path = urls[Math.floor(Math.random() * urls.length)];
    const file = await Deno.readFile(path);

    ctx.response.body = file;
  };

  return { index };
};
