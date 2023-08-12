import { RouterContext, Status } from "../deps.ts";

export const AvatarImageController = () => {
  const oretan = async (ctx: RouterContext<"/avatar/oretan">) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "image/jpeg";

    const path = new URL(
      "../../images/avatar/20220509_153142.jpg",
      import.meta.url,
    );
    const file = await Deno.readFile(path);

    ctx.response.body = file;
  };

  const cocotan = async (ctx: RouterContext<"/avatar/cocotan">) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "image/png";

    const path = new URL(
      "../../images/avatar/IMG_0666.png",
      import.meta.url,
    );
    const file = await Deno.readFile(path);

    ctx.response.body = file;
  };

  return { oretan, cocotan };
};
