import { prisma } from "../database/prismaClient";

interface ICreateActions {
  description: string;
}

export class CreateActionsUseCase {
  async execute({ description }: ICreateActions) {
    const actions = await prisma.actions.create({
      data: {
        description,
      },
    });
    return actions;
  }
}
