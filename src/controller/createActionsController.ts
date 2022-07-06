import { Request, Response } from "express";
import { CreateActionsUseCase } from "../useCases/createActionsUseCases";

export class CreateActionsController {
  async handle(request: Request, response: Response) {
    try {
      const { description } = request.body;

      const createActionsUseCases = new CreateActionsUseCase();

      const action = await createActionsUseCases.execute({
        description,
      });
      return response.json(action);
    } catch (error) {
      return response.json(error);
    }
  }
}
