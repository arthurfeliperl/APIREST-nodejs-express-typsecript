import express from "express";
import userRoutes from "./routes/user.routes.js";


const app = express();
app.use(express.json());




app.use("/user", userRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});




