import "dotenv/config";
import express from "express";
import userRoutes from "./routes/user.routes.js";
import AuthService from "./services/auth.services.js";
import AuthController from "./controllers/auth.controller.js";

const app = express();
app.use(express.json());

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const db = require("../models/index.js");

const authService = new AuthService(db.User); // TODO: Colocar como parametro a model check


const authController = new AuthController(authService);

app.use("/user", userRoutes);
app.use("/auth", authController.getRouter());

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});


