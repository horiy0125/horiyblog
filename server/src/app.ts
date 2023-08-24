import { Application } from "./deps.ts";
import webhook from "./routes/webhook.ts";

const app = new Application();

app.use(webhook.routes());

await app.listen({ port: 8080 });
