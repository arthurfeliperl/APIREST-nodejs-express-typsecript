import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import { NotFoundError,BadRequestError} from "../helpers/Api-Error.js";
import type {
  UserServiceInterface,
  CreateUserDTO,
  UpdateUserDTO,
} from "../interfaces/user.interface.js";

export default class UserService implements UserServiceInterface {
  constructor(private userModel: typeof User) {}

  async createUser(data: CreateUserDTO) {
    const { name, email, birth, password } = data;

    if (!name || !email || !password || !birth) {
      throw new BadRequestError("Algum campo não foi preenchido");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const novoUsuario = await this.userModel.create({
      name,
      email,
      birth,
      password: hashedPassword,
    });

    return novoUsuario;
  }

  async getAllUsers() {
    const users = await this.userModel.findAll();
    return users;
  }

  async getUserById(id: string) {
    const user = await this.userModel.findByPk(id);

    if (!user) {
      throw new NotFoundError("Usuário não encontrado");
}
    return user;
  }
  async updateUser(id: string, data: UpdateUserDTO) {
   const user = await this.userModel.findByPk(id);

  if (!user) {
    throw new NotFoundError("Usuário não encontrado");
}
  const updateData: Partial<CreateUserDTO> = { ...data };
  if (data.password) {
    updateData.password = await bcrypt.hash(data.password, 10);
  }

  await user.update(updateData);
  return user;
}
  async deleteUser(id: string) {
  const user = await this.userModel.findByPk(id);

  if (!user) {
    throw new NotFoundError("Usuário não encontrado");
}

    await user.destroy();
    return true;
  }
}
