import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";


export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    
    const createDeliverymanUseCase = new CreateDeliverymanUseCase();
    
    const result = await createDeliverymanUseCase.execute({
      username: request.body.username,
      password: request.body.password
    });

    return response.json(result);
  }
}