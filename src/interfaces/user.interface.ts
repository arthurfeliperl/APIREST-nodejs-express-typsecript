import type { User } from "../models/User.js";

export interface IUserService { //tipagem forte
  createUser(data: CreateUserDTO): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User>;
  updateUser(id: string, data: UpdateUserDTO): Promise<User>;
  deleteUser(id: string): Promise<boolean>;
}

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