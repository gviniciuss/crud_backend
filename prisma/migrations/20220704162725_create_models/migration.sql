-- CreateTable
CREATE TABLE "container" (
    "id" SERIAL NOT NULL,
    "client" TEXT NOT NULL,
    "containerNumber" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "container_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actions" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "actions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "container_actions" (
    "id" SERIAL NOT NULL,
    "description_action" TEXT NOT NULL,
    "id_container" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "container_actions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "container_client_key" ON "container"("client");

-- CreateIndex
CREATE UNIQUE INDEX "container_containerNumber_key" ON "container"("containerNumber");

-- CreateIndex
CREATE UNIQUE INDEX "actions_description_key" ON "actions"("description");

-- AddForeignKey
ALTER TABLE "container_actions" ADD CONSTRAINT "container_actions_id_container_fkey" FOREIGN KEY ("id_container") REFERENCES "container"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "container_actions" ADD CONSTRAINT "container_actions_description_action_fkey" FOREIGN KEY ("description_action") REFERENCES "actions"("description") ON DELETE RESTRICT ON UPDATE CASCADE;
