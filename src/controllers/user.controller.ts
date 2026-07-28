import { type Request, type Response } from "express";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const db = require("../../models/index.js");

const User = db.User;

export const CreateUsers = async (req: Request, res: Response) => {
  try {
    const { name, email, birth, password } = req.body;
        console.log(req.body);
        if (!name || !email || !birth || !password) {
            res.status(400).json({ message: "Todos os campos são obrigatórios" });
            return;
        }
        
        // users.push virou o User.create do Sequelize
        const newUser = await User.create({ name, email, birth, password });
        res.status(201).json(newUser);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro interno ao criar usuário" });
    }
};

export const AlltheUsers = async (req: Request, res: Response) => {
    try {
        // troquei o retorno do array pelo User.findAll do Sequelize
        const allUsers = await User.findAll();
        res.status(200).json(allUsers);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro interno ao buscar usuários" });
    }
};

export const FindUsers = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        //users.find pelo User.findByPk 
        const user = await User.findByPk(id);

        if (!user) {
            res.status(404).json({ message: "Usuário não encontrado" });
        } else {
            res.json(user);
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro interno ao buscar usuário" });
    }
};

export const UpdateUsers = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, email, birth, password } = req.body;

        if (!name || !email || !birth || !password) {
            res.status(400).json({ message: "Todos os campos são obrigatórios" });
            return;
        }

        const user = await User.findByPk(id);

        if (!user) {
            res.status(404).json({ message: "Usuário não encontrado" });
        } else {
            
            await user.update({ name, email, birth, password });
            res.json(user);
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro interno ao atualizar usuário" });
    }
};

export const DeleteUsers = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;  
        const user = await User.findByPk(id);

        if (!user) {
            res.status(404).json({ message: "Usuário não encontrado" });
        } else {
            //USERS SPLICE agora e user.destroy do sequelize
            await user.destroy();
            res.status(204).send();
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro interno ao deletar usuário" });
    }
};