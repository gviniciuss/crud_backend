import { Request, Response } from "express";
import { CreateContainerUseCase } from "../useCases/createContainerUseCases";

export class CreateContainerController {
  async handle(request: Request, response: Response) {
    try {
      const { client, containerNumber, type, status, category } = request.body;

      const createContainerUseCases = new CreateContainerUseCase();

      const container = await createContainerUseCases.execute({
        client,
        containerNumber,
        type,
        status,
        category,
      });
      return response.json(container);
    } catch (error) {
      return response.json(error);
    }
  }
}
