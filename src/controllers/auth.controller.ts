import { type Request, type Response, Router } from "express";
import type AuthService from "../services/auth.services.js";

export default class AuthController {
  constructor(private authService: AuthService) {}
  
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = await this.authService.login({ email, password });
    res.status(200).json(result);
  }
}