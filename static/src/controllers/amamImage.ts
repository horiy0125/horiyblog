import { RouterContext, Status } from "../deps.ts";

export const AmamImageController = () => {
  const index = async (ctx: RouterContext<"/">) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "image/jpeg";

    const path = new URL(
      "../../images/20220509_153105.jpg",
      import.meta.url,
    );
    const file = await Deno.readFile(path);

    ctx.response.body = file;
  };

  return { index };
};
