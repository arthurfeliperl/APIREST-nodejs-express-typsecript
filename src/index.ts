import "dotenv/config";
import express from "express";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routers.js";
import AuthService from "./services/auth.service.js";
import AuthController from "./controllers/auth.controller.js";

const app = express();
app.use(express.json());

const authService = new AuthService();// TODO: Colocar como parametro a model


const authController = new AuthController(authService);

app.use("/user", userRoutes);
app.use("/auth", authController.getRouter());

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});


