import { Application } from "./deps.ts";
import healthCheck from "./routes/healthCheck.ts";
import avatarImage from "./routes/avatarImage.ts";
import faviconImage from "./routes/faviconImage.ts";

const app = new Application();

app.use(healthCheck.routes());

app.use(avatarImage.routes());
app.use(faviconImage.routes());

await app.listen({ port: 8080 });
