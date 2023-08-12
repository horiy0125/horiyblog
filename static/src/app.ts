import { Application } from "./deps.ts";
import healthCheck from "./routes/healthCheck.ts";
import avatarImage from "./routes/avatarImage.ts";

const app = new Application();

app.use(healthCheck.routes());

app.use(avatarImage.routes());

await app.listen({ port: 8080 });
