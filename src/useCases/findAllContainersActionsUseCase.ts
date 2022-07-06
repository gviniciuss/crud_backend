import { prisma } from "../database/prismaClient";

export class FindAllContainersActionsUseCase {
  async execute() {
    const containerActions = await prisma.container_Actions.findMany();

    return containerActions;
  }
}
