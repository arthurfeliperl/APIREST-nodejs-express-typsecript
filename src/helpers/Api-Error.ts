export class ApiError extends Error {
    constructor(public message: string, public statusCode: number=400) {
        super(message);
        this.name = "ApiError";
    }
    
}
export class NotFoundError extends ApiError {
  constructor(message: string = "Recurso não encontrado") {
    super(message, 404);
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
}
export class UnauthorizedError extends ApiError {
  constructor(message: string = "Não autorizado") {
    super(message, 401);
  }
}
export class ConflictError extends ApiError {
  constructor(message: string = "Conflito de dados") {
    super(message, 409);
  }
}

export class ForbiddenError extends ApiError {
  constructor(message: string = "Sem permissão para acessar este recurso") {
    super(message, 403);
  }
}
//olhar asyncHandler junto com middlewares para eliminar o try catch. 
//TODO1: trocar os throw new ERROR nos services para throw new APPError, e passar o statusCode correto, para que o errorHandler trate corretamente os erros
//TODO2: Simplificar os controllers, em vez de try catch so repassa o erro pro express com next(error)
//TODO3:Atualizar o errorHandler pra checar instanceof AppError primeiro
//obs olhar o video do youtube para garantir que ta tudo certo
