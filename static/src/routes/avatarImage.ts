import { AvatarImageController } from "../controllers/avatarImage.ts";
import { Router } from "../deps.ts";

const router = new Router();
const avatarImageController = AvatarImageController();

router.get("/avatar/me", avatarImageController.me);
router.get("/avatar/oretan", avatarImageController.oretan);
router.get("/avatar/cocotan", avatarImageController.cocotan);

export default router;
