import { RouterContext, Status } from "../deps.ts";

export const FaviconImageController = () => {
  const twitter = async (ctx: RouterContext<"/favicon/twitter">) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "image/png";

    const path = new URL(
      "../../images/favicon/twitter.png",
      import.meta.url,
    );
    const file = await Deno.readFile(path);

    ctx.response.body = file;
  };

  const github = async (ctx: RouterContext<"/favicon/github">) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "image/png";

    const path = new URL(
      "../../images/favicon/github.png",
      import.meta.url,
    );
    const file = await Deno.readFile(path);

    ctx.response.body = file;
  };

  const qiita = async (ctx: RouterContext<"/favicon/qiita">) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "image/png";

    const path = new URL(
      "../../images/favicon/qiita.png",
      import.meta.url,
    );
    const file = await Deno.readFile(path);

    ctx.response.body = file;
  };

  const note = async (ctx: RouterContext<"/favicon/note">) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "image/png";

    const path = new URL(
      "../../images/favicon/note.png",
      import.meta.url,
    );
    const file = await Deno.readFile(path);

    ctx.response.body = file;
  };

  return { twitter, github, qiita, note };
};
