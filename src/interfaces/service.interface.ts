export interface ServiceInterface<T, CreateDTO extends object, UpdateDTO extends object> {
  createUser(data: CreateDTO): Promise<T>;
  getAllUsers(): Promise<T[]>;
  getUserById(id: string): Promise<T>;
  updateUser(id: string, data: UpdateDTO): Promise<T>;
  deleteUser(id: string): Promise<boolean>;
}
