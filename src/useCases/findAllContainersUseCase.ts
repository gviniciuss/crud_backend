import { prisma } from "../database/prismaClient";

export class FindAllContainersUseCase {
  async execute() {
    const container = await prisma.container.findMany();

    return container;
  }
}
