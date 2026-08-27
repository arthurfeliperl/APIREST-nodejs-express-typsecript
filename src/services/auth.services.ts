import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import  { User } from "../models/User.js";
import { BadRequestError, UnauthorizedError } from "../helpers/Api-Error.js";

export default class AuthService {
  constructor(private userModel: typeof User) {} 

  async login(dto: LoginDTO) {
    const { email, password } = dto;

    if (!email || !password) {
      throw new BadRequestError("Email e senha são obrigatórios");
    }

    const user = await this.userModel.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedError("Email ou senha inválidos");
    }

    const senhaCorreta = await bcrypt.compare(password, user.password);

    if (!senhaCorreta) {
      throw new UnauthorizedError("Email ou senha inválidos");
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