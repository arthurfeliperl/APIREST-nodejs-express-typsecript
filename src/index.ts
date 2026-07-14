import express from "express";
import usuarioRoutes from "./routes/usuario.routes.js";

const app = express();
app.use(express.json());

app.use("/usuarios", usuarioRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});