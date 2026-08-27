import type { User } from "../models/User.js";
import type { ServiceInterface } from "./service.interface.js";

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  birth: Date;
}

export interface UpdateUserDTO {
  name?: string;
  email?: string;
  password?: string;
  birth?: Date;
}

export interface UserServiceInterface
  extends ServiceInterface<User, CreateUserDTO, UpdateUserDTO> {
  createUser(data: CreateUserDTO): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User>;
  updateUser(id: string, data: UpdateUserDTO): Promise<User>;
  deleteUser(id: string): Promise<boolean>;
}