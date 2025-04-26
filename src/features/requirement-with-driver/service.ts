import { prisma } from "@/lib/prisma";
import {
  CreateWithDriver,
  CreateWithDriverSchema,
  UpdateWithDriver,
  UpdateWithDriverSchema,
} from "./schema";
import { HTTPException } from "hono/http-exception";

export const getAllWithDriverSection = async () => {
  return await prisma.requirementWithDriver.findMany();
};

export const getWithDriverSection = async (id: number) => {
  const findWithDriver = await prisma.requirementWithDriver.findUnique({
    where: { id },
  });

  if (!findWithDriver) {
    throw new HTTPException(404, { message: "WithDriver not found!" });
  }

  return findWithDriver;
};

export const createWithDriverSection = async (request: CreateWithDriver) => {
  request = CreateWithDriverSchema.parse(request);

  const requirementWithDriver = await prisma.requirementWithDriver.create({
    data: request,
  });

  return requirementWithDriver;
};

export const updateWithDriverSection = async (request: UpdateWithDriver) => {
  request = UpdateWithDriverSchema.parse(request);

  const findWithDriver = await prisma.requirementWithDriver.findUnique({
    where: { id: request.id },
  });

  if (!findWithDriver) {
    throw new HTTPException(404, { message: "WithDriver not found!" });
  }

  const updatedWithDriver = await prisma.requirementWithDriver.update({
    where: { id: findWithDriver.id },
    data: request,
  });

  return updatedWithDriver;
};

export const deleteWithDriver = async (id: number) => {
  const findWithDriver = await prisma.requirementWithDriver.findUnique({
    where: { id },
  });

  if (!findWithDriver) {
    throw new HTTPException(404, { message: "WithDriver not found!" });
  }

  await prisma.requirementWithDriver.delete({
    where: { id },
  });

  return true;
};
