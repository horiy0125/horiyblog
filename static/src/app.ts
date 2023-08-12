import { Application } from "./deps.ts";
import amamImage from "./routes/amamImage.ts";
import avatarImage from "./routes/avatarImage.ts";
import faviconImage from "./routes/faviconImage.ts";
import lgtmImage from "./routes/lgtmImage.ts";

const app = new Application();

app.use(amamImage.routes());
app.use(avatarImage.routes());
app.use(faviconImage.routes());
app.use(lgtmImage.routes());

await app.listen({ port: 8080 });
