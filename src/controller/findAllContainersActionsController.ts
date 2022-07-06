import { Request, Response } from "express";
import { FindAllContainersActionsUseCase } from "../useCases/findAllContainersActionsUseCase";

export class FindAllContainersActionsController {
  async handle(request: Request, response: Response) {
    try {
      const findAllContainersActionsUseCase =
        new FindAllContainersActionsUseCase();

      const containerActions = await findAllContainersActionsUseCase.execute();

      return response.json(containerActions);
    } catch (error) {
      return response.json(error);
    }
  }
}
