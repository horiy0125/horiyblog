import { WebhookController } from "../controllers/webhook.ts";
import { Router } from "../deps.ts";

const router = new Router();
const webhookController = WebhookController();

router.get("/callback", webhookController.callback);

export default router;
