import { RouterContext, Status } from "../deps.ts";

export const HealthCheckController = () => {
  const index = (ctx: RouterContext<"/health_check">) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "json";

    ctx.response.body = {
      status: Status.OK,
    };
  };

  return { index };
};
