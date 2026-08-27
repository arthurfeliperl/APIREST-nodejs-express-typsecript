import type { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'sequelize';
import { ApiError } from '../helpers/Api-Error.js'; 

export const errorHandler = (erro: Error, req: Request, res: Response, next: NextFunction) => {
  if (erro instanceof ApiError) {
    return res.status(erro.statusCode).json({ message: erro.message });
  }
  if (erro instanceof ValidationError) {
    const errors = erro.errors.map((error) => error.message);
    return res.status(400).json({ errors });
  }
  console.error(erro);
  res.status(500).json({ message: 'Internal Server Error' });
};