import { Request, Response } from "express";
import { FindAllActionsUseCase } from "../useCases/findAllActionsUseCase";

export class FindAllActionsController {
  async handle(request: Request, response: Response) {
    try {
      const findAllActionsUseCase = new FindAllActionsUseCase();

      const actions = await findAllActionsUseCase.execute();

      return response.json(actions);
    } catch (error) {
      return response.json(error);
    }
  }
}
