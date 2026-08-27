import { Router } from "express";
import AuthService from "../services/auth.services.js";
import AuthController from "../controllers/auth.controller.js";
import {User} from "../models/User.js";

const router = Router();

const authService = new AuthService(User);
const authController = new AuthController(authService);
router.post("/login", authController.login.bind(authController));

export default router;
  