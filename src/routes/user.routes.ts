import { Router } from "express";
import { 
    CreateUsers, 
    AlltheUsers, 
    FindUsers, 
    UpdateUsers, 
    DeleteUsers 
} from "../controllers/user.controller.js";

const router = Router();

router.post("/", CreateUsers);
router.get("/", AlltheUsers);
router.get("/:id", FindUsers);
router.put("/:id", UpdateUsers);
router.delete("/:id", DeleteUsers);

export default router;