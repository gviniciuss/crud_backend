import { Request, Response } from "express";
import { FindAllContainersUseCase } from "../useCases/findAllContainersUseCase";

export class FindAllContainersController {
  async handle(request: Request, response: Response) {
    try {
      const findAllContainersUseCase = new FindAllContainersUseCase();

      const container = await findAllContainersUseCase.execute();

      return response.json(container);
    } catch (error) {
      return response.json(error);
    }
  }
}
