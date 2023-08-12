import { LgtmImageController } from "../controllers/lgtmImage.ts";
import { Router } from "../deps.ts";

const router = new Router();
const lgtmImageController = LgtmImageController();

router.get("/lgtm", lgtmImageController.index);

export default router;
