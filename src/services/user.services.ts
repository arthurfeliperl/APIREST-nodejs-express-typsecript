import bcrypt from "bcrypt";
import {User} from "../models/User.js"
import type { IUserService, CreateUserDTO, UpdateUserDTO } from "../interfaces/user.interface.js";

export default class UserService implements IUserService {
  constructor(private userModel: typeof User) {}

  async createUser(data: CreateUserDTO) {
    const { name, email, birth, password } = data;

    if (!name || !email || !password || !birth) {
      throw new Error("Algum campo não foi preenchido");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const novoUsuario = await this.userModel.create({ name, email, birth, password: hashedPassword });
    
    return novoUsuario;
  } 

  async getAllUsers() {
    const users = await this.userModel.findAll();
    return users;
  } 

  async getUserById(id: string) {
    const user = await this.userModel.findByPk(id);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return user;
  } 
  async updateUser(id: string, data: any) {
    const { name, email, birth, password } = data;
      if(!name || !email || !birth || !password)
        throw new Error ("Todos os campos são obrigatórios")
    
    const user = await this.userModel.findByPk(id);
    
    if(!user)
      throw new Error ("Usuários não encontrado");
  
  const hashedPassword = await bcrypt.hash(password, 10);
  await user.update({name, email, birth, password: hashedPassword});

  return user;    
  }
  async deleteUser(id: string) {
    const user = await this.userModel.findByPk(id);

    if(!user)
      throw new Error("Usuário não encontrado")

  await user.destroy()
  return true;
  }}