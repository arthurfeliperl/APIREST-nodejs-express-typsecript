import express from "express";
import userRoutes from "./routes/user.routes.js";
import { testConnection } from "./database/index.js"; 

const app = express();
app.use(express.json());


testConnection();

app.use("/user", userRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});




