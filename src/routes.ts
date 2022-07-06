import Router from "express";

import { CreateContainerController } from "./controller/createContainerController";
import { CreateActionsController } from "./controller/createActionsController";
import { CreateContainerActionsController } from "./controller/createContainerActionsController";

import { FindAllContainersController } from "./controller/findAllContainersController";
import { FindAllContainersActionsController } from "./controller/findAllContainersActionsController";
import { FindAllActionsController } from "./controller/findAllActionsController";

const routes = Router();

const createContainerController = new CreateContainerController();
const createActionsController = new CreateActionsController();
const createContainerActionsController = new CreateContainerActionsController();

const findAllContainersController = new FindAllContainersController();
const findAllActionsController = new FindAllActionsController();
const findAllContainersActionsController =
  new FindAllContainersActionsController();

routes.post("/createContainer", createContainerController.handle);
routes.post("/createActions", createActionsController.handle);
routes.post("/createContainerActions", createContainerActionsController.handle);

routes.get("/findContainer", findAllContainersController.handle);
routes.get("/findActions", findAllActionsController.handle);
routes.get("/findContainerActions", findAllContainersActionsController.handle);

export { routes };
