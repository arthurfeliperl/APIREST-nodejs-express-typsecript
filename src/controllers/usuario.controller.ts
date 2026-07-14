

import { type Request, type Response } from "express";
import { randomUUID } from "crypto";
import { type Usuario, usuarios } from "../interfaces/usuario.interface.js";

export const criarUsuario = (req: Request, res: Response) => {
    const { nome, email, idade } = req.body;
    const id = randomUUID();
    const usuario: Usuario = { id, nome, email, idade };

    if (!nome || !email || !idade) {
        res.status(400).json({ message: "Todos os campos são obrigatórios" });
        return;
    }
    
    usuarios.push(usuario);
    res.status(201).json(usuario);
};

export const listarUsuarios = (req: Request, res: Response) => {
    res.status(200).json(usuarios);
};

export const buscarUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = usuarios.find((u) => u.id === id);

    if (!usuario) {
        res.status(404).json({ message: "Usuário não encontrado" });
    } else {
        res.json(usuario);
    }
};

export const atualizarUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    if (!nome || !email || !idade) {
        res.status(400).json({ message: "Todos os campos são obrigatórios para atualização" });
        return;
    }

    const usuario = usuarios.find((u) => u.id === id);

    if (!usuario) {
        res.status(404).json({ message: "Usuário não encontrado" });
    } else {
        usuario.nome = nome;
        usuario.email = email;
        usuario.idade = idade;
        res.json(usuario);
    }
};

export const deletarUsuario = (req: Request, res: Response) => {
    const { id } = req.params;  
    const index = usuarios.findIndex((u) => u.id === id);

    if (index === -1) {
        res.status(404).json({ message: "Usuário não encontrado" });
    } else {
        usuarios.splice(index, 1);
        res.status(204).send();
    }
};