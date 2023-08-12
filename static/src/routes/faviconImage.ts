import { FaviconImageController } from "../controllers/faviconImage.ts";
import { Router } from "../deps.ts";

const router = new Router();
const faviconImageController = FaviconImageController();

router.get("/favicon/twitter", faviconImageController.twitter);
router.get("/favicon/github", faviconImageController.github);
router.get("/favicon/qiita", faviconImageController.qiita);
router.get("/favicon/note", faviconImageController.note);

export default router;
