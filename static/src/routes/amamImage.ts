import { AmamImageController } from "../controllers/amamImage.ts";
import { Router } from "../deps.ts";

const router = new Router();
const amamImageController = AmamImageController();

router.get("/", amamImageController.index);

export default router;
