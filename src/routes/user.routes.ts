import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import UserService from "../services/user.services.js";
import { createRequire } from "module";

// Temporário: Importando o banco do jeito antigo até migrar para o sequelize-typescript
const require = createRequire(import.meta.url);
const db = require("../../models/index.js");
const User = db.User;

const router = Router();

const userService = new UserService(User);

const userController = new UserController(userService);

router.post("/", userController.create.bind(userController));
router.get("/", userController.getAll.bind(userController));
router.get("/:id", userController.getById.bind(userController));
router.put("/:id", userController.update.bind(userController));
router.delete("/:id", userController.delete.bind(userController));

export default router;