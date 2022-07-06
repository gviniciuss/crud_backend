import { Request, Response } from "express";
import { CreateContainerActionsUseCases } from "../useCases/createContainerActionsUseCases";

export class CreateContainerActionsController {
  async handle(request: Request, response: Response) {
    try {
      const { description_action, id_container } = request.body;

      const createContainerActionsUseCases =
        new CreateContainerActionsUseCases();

      const containerActions = await createContainerActionsUseCases.execute({
        description_action,
        id_container,
      });
      return response.json(containerActions);
    } catch (error) {
      return response.json(error);
    }
  }
}
