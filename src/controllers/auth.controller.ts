import { Router } from "express";
import type AuthService from "../services/auth.services.js";

export default class AuthController {
  constructor(private authService: AuthService) {}

  getRouter() {
    const router = Router();

    router.post("/login", this.login.bind(this));

    return router;
  }

  async login(req: any, res: any) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ message: "Email e senha são obrigatórios" });
        return;
      }

      const result = await this.authService.login({ email, password });

      res.status(200).json(result);
    } catch (error: any) {
      console.error(error);
      res.status(401).json({ message: error.message });
    }
  }
}
