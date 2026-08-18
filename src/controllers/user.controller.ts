import { type Request, type Response } from "express";
import  type { IUserService } from "../interfaces/user.interface.js";

export default class UserController {
  constructor(private userService: IUserService){}
  
  async create(req: Request, res: Response) {
    try {
      const userData = req.body

      const newUser = await this.userService.createUser(userData)
      res.status(201).json(newUser)

    } catch (error: any) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const allUsers = await this.userService.getAllUsers();
      res.status(200).json(allUsers)

    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
  async getUserById(req: Request<{ id: string }>, res: Response) {
    try{
      const {id} = req.params;
      const user = await this.userService.getUserById(id)
      res.json(user)

} catch (error:any){
  console.error(error);
  res.status(404).json({message: error.message });
}

} 
  async update(req: Request<{ id: string }>, res: Response) {
    try {
      const {id} = req.params;

      const userData = req.body;

      const updatedUser = await this.userService.updateUser(id, userData); 
        res.json(updatedUser) 

    } catch (error: any) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request<{ id: string }>, res: Response){
    try {
      const{id} = req.params

      await this.userService.deleteUser(id)

      res.status(204).send()

    } catch (error: any) {
      console.error(error);
      res.status(404).json({ message: error.message });
    }
  }}