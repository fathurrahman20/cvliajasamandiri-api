import { prisma } from "@/lib/prisma";
import {
  CreateRequirementNoDriver,
  CreateRequirementNoDriverSchema,
  UpdateRequirementNoDriver,
  UpdateRequirementNoDriverSchema,
} from "./schema";
import { HTTPException } from "hono/http-exception";

export const getAllRequirementNoDriverSection = async () => {
  return await prisma.requirementNoDriver.findMany();
};

export const getRequirementNoDriverSection = async (id: number) => {
  const findRequirementNoDriver = await prisma.requirementNoDriver.findUnique({
    where: { id },
  });

  if (!findRequirementNoDriver) {
    throw new HTTPException(404, { message: "RequirementNoDriver not found!" });
  }

  return findRequirementNoDriver;
};

export const createRequirementNoDriverSection = async (
  request: CreateRequirementNoDriver
) => {
  request = CreateRequirementNoDriverSchema.parse(request);

  const requirementNoDriver = await prisma.requirementNoDriver.create({
    data: request,
  });

  return requirementNoDriver;
};

export const updateRequirementNoDriverSection = async (
  request: UpdateRequirementNoDriver
) => {
  request = UpdateRequirementNoDriverSchema.parse(request);

  const findRequirementNoDriver = await prisma.requirementNoDriver.findUnique({
    where: { id: request.id },
  });

  if (!findRequirementNoDriver) {
    throw new HTTPException(404, { message: "RequirementNoDriver not found!" });
  }

  const updatedRequirementNoDriver = await prisma.requirementNoDriver.update({
    where: { id: findRequirementNoDriver.id },
    data: request,
  });

  return updatedRequirementNoDriver;
};

export const deleteRequirementNoDriver = async (id: number) => {
  const findRequirementNoDriver = await prisma.requirementNoDriver.findUnique({
    where: { id },
  });

  if (!findRequirementNoDriver) {
    throw new HTTPException(404, { message: "RequirementNoDriver not found!" });
  }

  await prisma.requirementNoDriver.delete({
    where: { id },
  });

  return true;
};
