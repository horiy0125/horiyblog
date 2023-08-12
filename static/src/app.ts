import { Application } from "./deps.ts";

const app = new Application();

await app.listen({ port: 8080 });
