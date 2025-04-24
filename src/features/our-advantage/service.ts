import { prisma } from "@/lib/prisma";
import {
  CreateOurAdvantage,
  CreateOurAdvantageSchema,
  UpdateOurAdvantage,
  UpdateOurAdvantageSchema,
} from "./schema";
import { HTTPException } from "hono/http-exception";

export const getAllOurAdvantageSection = async () => {
  return await prisma.ourAdvantage.findMany();
};

export const getOurAdvantageSection = async (id: number) => {
  const findOurAdvantage = await prisma.ourAdvantage.findUnique({
    where: { id },
  });

  if (!findOurAdvantage) {
    throw new HTTPException(404, { message: "OurAdvantage not found!" });
  }

  return findOurAdvantage;
};

export const createOurAdvantageSection = async (
  request: CreateOurAdvantage
) => {
  request = CreateOurAdvantageSchema.parse(request);

  const ourAdvantage = await prisma.ourAdvantage.create({
    data: request,
  });

  return ourAdvantage;
};

export const updateOurAdvantageSection = async (
  request: UpdateOurAdvantage
) => {
  request = UpdateOurAdvantageSchema.parse(request);

  const findOurAdvantage = await prisma.ourAdvantage.findUnique({
    where: { id: request.id },
  });

  if (!findOurAdvantage) {
    throw new HTTPException(404, { message: "OurAdvantage not found!" });
  }

  const updatedOurAdvantage = await prisma.ourAdvantage.update({
    where: { id: findOurAdvantage.id },
    data: request,
  });

  return updatedOurAdvantage;
};

export const deleteOurAdvantage = async (id: number) => {
  const findOurAdvantage = await prisma.ourAdvantage.findUnique({
    where: { id },
  });

  if (!findOurAdvantage) {
    throw new HTTPException(404, { message: "OurAdvantage not found!" });
  }

  await prisma.ourAdvantage.delete({
    where: { id },
  });

  return true;
};
