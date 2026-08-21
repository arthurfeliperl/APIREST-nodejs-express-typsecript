import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default class AuthService {
  constructor(private userModel: any) {}

  async login(dto: LoginDTO) {
    const { email, password } = dto;

    if (!email || !password) {
      throw new Error("Email e senha são obrigatórios");
    }

    const user = await this.userModel.findOne({ where: { email } });

    if (!user) {
      throw new Error("Email ou senha inválidos");
    }

    const senhaCorreta = await bcrypt.compare(password, user.password);

    if (!senhaCorreta) {
      throw new Error("Email ou senha inválidos");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" },
    );

    return { token };
  }
}

export interface LoginDTO {
  email: string;
  password: string;
}
