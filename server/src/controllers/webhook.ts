import { envVariables } from "../config/envVariables.ts";
import { RouterContext } from "../deps.ts";

export const WebhookController = () => {
  const callback = async (ctx: RouterContext<"/callback">) => {
    const requestBody = await ctx.request.body().value;
    const { message, replyToken } = requestBody;

    const path = "https://api.line.me/v2/bot/message/reply";
    const body = {
      replyToken,
      messages: [
        { type: "text", text: message },
      ],
    };

    return await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${envVariables.CHANNEL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(body),
    });
  };

  return { callback };
};
