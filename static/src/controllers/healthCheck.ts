import { RouterContext, Status } from "../deps.ts";
import { ApiHealth } from "../models/apiHealth.ts";

export const HealthCheckController = () => {
  const index = (ctx: RouterContext<"/api/health_check">) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "json";

    const data: ApiHealth = {
      message: "Working normally.",
    };

    ctx.response.body = {
      status: Status.OK,
      data,
    };
  };

  return { index };
};
