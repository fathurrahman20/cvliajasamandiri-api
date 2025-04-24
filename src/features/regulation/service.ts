import { prisma } from "@/lib/prisma";
import {
  CreateRegulation,
  CreateRegulationSchema,
  UpdateRegulation,
  UpdateRegulationSchema,
} from "./schema";
import { HTTPException } from "hono/http-exception";

export const getAllRegulationSection = async () => {
  return await prisma.regulation.findMany();
};

export const getRegulationSection = async (id: number) => {
  const findRegulation = await prisma.regulation.findUnique({
    where: { id },
  });

  if (!findRegulation) {
    throw new HTTPException(404, { message: "Regulation not found!" });
  }

  return findRegulation;
};

export const createRegulationSection = async (request: CreateRegulation) => {
  request = CreateRegulationSchema.parse(request);

  const regulation = await prisma.regulation.create({
    data: request,
  });

  return regulation;
};

export const updateRegulationSection = async (request: UpdateRegulation) => {
  request = UpdateRegulationSchema.parse(request);

  const findRegulation = await prisma.regulation.findUnique({
    where: { id: request.id },
  });

  if (!findRegulation) {
    throw new HTTPException(404, { message: "Regulation not found!" });
  }

  const updatedRegulation = await prisma.regulation.update({
    where: { id: findRegulation.id },
    data: request,
  });

  return updatedRegulation;
};

export const deleteRegulation = async (id: number) => {
  const findRegulation = await prisma.regulation.findUnique({
    where: { id },
  });

  if (!findRegulation) {
    throw new HTTPException(404, { message: "Regulation not found!" });
  }

  await prisma.regulation.delete({
    where: { id },
  });

  return true;
};
