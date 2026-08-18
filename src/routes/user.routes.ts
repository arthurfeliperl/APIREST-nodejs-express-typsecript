import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import UserService from "../services/user.services.js";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
import { User } from "../models/User.js"; 

const router = Router();

const userService = new UserService(User);

const userController = new UserController(userService);

router.post("/", userController.create.bind(userController));
router.get("/", userController.getAll.bind(userController));
router.get("/:id", userController.getUserById.bind(userController));
router.put("/:id", userController.update.bind(userController));
router.delete("/:id", userController.delete.bind(userController));

export default router;