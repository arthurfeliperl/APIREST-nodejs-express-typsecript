import bcrypt from "bcrypt";

export default class UserService {
  
  constructor(private userModel: any) {}

  async createUser(data: any) {
    const { name, email, birth, password } = data;

    if (!name || !email || !password || !birth) {
      throw new Error("Algum campo não foi preenchido");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const novoUsuario = await this.userModel.create({name,email,birth,password:hashedPassword});

  return novoUsuario;
  }
}