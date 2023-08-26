import { Application } from "./deps.ts";
import healthCheck from "./routes/healthCheck.ts";

const app = new Application();

app.use(healthCheck.routes());

await app.listen({ port: 8080 });
