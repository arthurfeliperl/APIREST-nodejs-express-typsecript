import { type Request, type Response } from "express";
export default class UserController {
  
  // TAREFA 3: Contrate o cozinheiro (Crie o construtor injetando o userService)constructor(private userService: any) {}
  constructor(private userService: any){}
  
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
  async getById(req:Request , res:Response ) {
    try{
      const {id} = req.params;
      const user = await this.userService.findByPk(id)
      res.json(user)
} catch (error:any){
  console.error(error);
  res.status(404).json({message: error.message });
}
} 
  async update(req: Request, res: Response) {
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

  async delete(req: Request, res: Response) {
    try {
      const{id} = req.params

      await this.userService.deleteUser(id)

      res.status(204).send()

    } catch (error: any) {
      console.error(error);
      res.status(404).json({ message: error.message });
    }
  }}