import express, { type Request, type Response } from "express";
const app = express();
app.use(express.json());
import { randomUUID } from "crypto";

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

interface Usuario {
    id: string;
    nome: string;
    email: string;
    idade: number;
}


const usuarios: Usuario[] = [];

app.post("/usuarios", (req: Request, res: Response) => { //criação dos usuarios
    const { nome, email, idade } = req.body;
    const id = randomUUID();
    const usuario: Usuario = { id, nome, email, idade };

    if (!nome || !email || !idade) {
        res.status(400).json({ message: "Todos os campos são obrigatórios" }); //verificação se todos os campos foram preenchidos
        return;
    }
    
    usuarios.push(usuario); //atualizar a memoria local com o novo usuario

    res.status(201).json(usuario);
    console.log("Usuário criado:", usuario);
});

app.get("/usuarios", (req: Request, res: Response) => {
    console.log("Lista de usuários:", usuarios); //exibindo lista de usuarios no console
    res.status(200).json(usuarios);
});

app.get("/usuarios/:id", (req: Request, res: Response) => { //busca do usuario pelo id
    const { id } = req.params;
    const usuario = usuarios.find((u) => u.id === id);

    if (!usuario) {
        res.status(404).json({ message: "Usuário não encontrado" }); //verificação se o usuario existe
    } else {
        res.json(usuario);
    }

    console.log("Usuário encontrado:", usuario);});


app.put("/usuarios/:id", (req: Request, res: Response) => { //atualizar o usuario buscando pelo id
    const { id } = req.params;
    const { nome, email, idade } = req.body;
    const usuario = usuarios.find((u) => u.id === id);

    if (!usuario) {
        res.status(404).json({ message: "Usuário não encontrado" }); //verificação de existencia do usuario
    } else {
        usuario.nome = nome;
        usuario.email = email;
        usuario.idade = idade;
        res.json(usuario);//atualizou os dados do usuario e depois retornou o usuario atualizado
    }

    console.log("Usuário atualizado:", usuario);});


app.delete("/usuarios/:id", (req: Request, res: Response) => { //excluir o usuario pelo id
    const { id } = req.params;  
    const index = usuarios.findIndex((u) => u.id === id);

    if (index === -1) { //busca do index menos 1, se o retorno for esse realmente nao existe esse usuario
        res.status(404).json({ message: "Usuário não encontrado" }); // verificação da existencia do usuario
    } else {
        const usuarioRemovido = usuarios.splice(index, 1)[0]; //remoção do usuario do array
        res.status(204).send();
    }});
 