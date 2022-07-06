import { prisma } from "../database/prismaClient";

interface ICreateContainer {
  client: string;
  containerNumber: string;
  type: number;
  status: boolean;
  category: string;
}

export class CreateContainerUseCase {
  async execute({
    client,
    containerNumber,
    type,
    status,
    category,
  }: ICreateContainer) {
    const container = await prisma.container.create({
      data: {
        client,
        containerNumber,
        type,
        status,
        category,
      },
    });
    return container;
  }
}
