import { prisma } from "../database/prismaClient";

export class FindAllActionsUseCase {
  async execute() {
    const actions = await prisma.actions.findMany();

    return actions;
  }
}
