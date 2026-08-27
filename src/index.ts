import "dotenv/config";
import express from "express";
import { sequelize } from "./database/index.js";
import { User } from "./models/User.js";
import userRoutes from "./routes/user.routes.js";
import AuthService from "./services/auth.services.js";
import AuthController from "./controllers/auth.controller.js";
import authRoutes from "./routes/auth.routes.js";
import { errorHandler } from "./middlewares/error.js";

const app = express();
app.use(express.json());

const authService = new AuthService(User);
const authController = new AuthController(authService);

app.use("/users", userRoutes);

app.use("/auth", authRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");

    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000!");
    });
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
};
app.use(errorHandler);

startServer();
