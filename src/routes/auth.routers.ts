import { Router, type Request, type Response } from "express";
import { createRequire } from "module";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const require = createRequire(import.meta.url);
const db = require("../../models/index.js");
const User = db.User;

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: "Email e senha são obrigatórios" });
            return;
        }

        const user = await User.findOne({ where: { email } });

        if (!user) {
            res.status(401).json({ message: "Email ou senha inválidos" });
            return;
        }

        const senhaCorreta = await bcrypt.compare(password, user.password);

        if (!senhaCorreta) {
            res.status(401).json({ message: "Email ou senha inválidos" });
            return;
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );

        res.status(200).json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro interno ao fazer login" });
    }
});

export default router;