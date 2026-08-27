import { type Request, type Response } from "express";
import type UserService from "../services/user.services.js";

export default class UserController {
  constructor(private userService: UserService) {}

  async create(req: Request, res: Response) {
    const userData = req.body;
    const newUser = await this.userService.createUser(userData);
    res.status(201).json(newUser);
  }

  async getAll(req: Request, res: Response) {
    const allUsers = await this.userService.getAllUsers();
    res.status(200).json(allUsers);
  }

  async getUserById(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const user = await this.userService.getUserById(id);
    res.json(user);
  }

  async update(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const userData = req.body;
    const updatedUser = await this.userService.updateUser(id, userData);
    res.json(updatedUser);
  }

  async delete(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    await this.userService.deleteUser(id);
    res.status(204).send();
  }
}
//TODO: acionar o guilherme quando acabar para debater sobre os proximo passos
//TODO: O usuario ira fazer post como se fosse o twitter e comentarios