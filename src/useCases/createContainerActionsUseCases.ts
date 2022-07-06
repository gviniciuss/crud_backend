import { prisma } from "../database/prismaClient";

interface ICreateContainerActions {
  description_action: string;
  id_container: number;
}

export class CreateContainerActionsUseCases {
  async execute({ description_action, id_container }: ICreateContainerActions) {
    const containerActions = await prisma.container_Actions.create({
      data: {
        description_action,
        id_container,
      },
    });
    return containerActions;
  }
}
