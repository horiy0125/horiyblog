import { RouterContext, Status } from "../deps.ts";

export const AmamImageController = () => {
  const index = async (ctx: RouterContext<"/">) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "image/jpeg";

    const urls = [
      new URL(
        "../../images/20220509_153105.jpg",
        import.meta.url,
      ),
      new URL(
        "../../images/IMG_4836.jpg",
        import.meta.url,
      ),
    ];

    const path = urls[Math.floor(Math.random() * urls.length)];
    const file = await Deno.readFile(path);

    ctx.response.body = file;
  };

  return { index };
};
