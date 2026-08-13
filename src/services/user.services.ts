import bcrypt from "bcrypt";

export default class UserService {
  // 1. INJEÇÃO DE DEPENDÊNCIA
  // O Service avisa: "Para eu funcionar, alguém precisa me entregar o model do banco de dados!"
  constructor(private userModel: any) {}

  // 2. O MÉTODO DE CRIAÇÃO (DTO - Data Transfer Object)
  // Veja que recebemos 'data' (os dados puros) e não 'req.body'
  async createUser(data: any) {
    const { name, email, birth, password } = data;

    // --- SUA MISSÃO COMEÇA AQUI --- //

    // TAREFA 1: Validação
    // Se faltar algum dos 4 campos, você não vai dar res.status().
    // Você vai usar: throw new Error("Mensagem de erro aqui");


    // TAREFA 2: Regra de Negócio (Criptografia)
    // Use o bcrypt para fazer o hash da variável 'password'.
    // Lembre-se do await!


    // TAREFA 3: Banco de Dados
    // Em vez de chamar User.create(), você vai chamar a ferramenta injetada:
    // await this.userModel.create({ ...dados... })


    // TAREFA 4: Retorno
    // Apenas retorne a variável com o usuário criado (return novoUsuario;)

  }
}