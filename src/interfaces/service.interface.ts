export interface ServiceInterface<T extends object, U extends object> {
  create(DTO: U): Promise<T>;
  update(id: string, DTO: U): Promise<T>;
}
