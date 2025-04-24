import { prisma } from "@/lib/prisma";
import {
  CreateBottom,
  CreateBottomSchema,
  UpdateBottom,
  UpdateBottomSchema,
} from "./schema";
import { HTTPException } from "hono/http-exception";

export const getAllBottomSection = async () => {
  return await prisma.bottonSection.findMany();
};

export const getBottomSection = async (id: number) => {
  const findBottom = await prisma.bottonSection.findUnique({
    where: { id },
  });

  if (!findBottom) {
    throw new HTTPException(404, { message: "Bottom not found!" });
  }

  return findBottom;
};

export const createBottomSection = async (request: CreateBottom) => {
  request = CreateBottomSchema.parse(request);

  const bottom = await prisma.bottonSection.create({
    data: request,
  });

  return bottom;
};

export const updateBottomSection = async (request: UpdateBottom) => {
  request = UpdateBottomSchema.parse(request);

  const findBottom = await prisma.bottonSection.findUnique({
    where: { id: request.id },
  });

  if (!findBottom) {
    throw new HTTPException(404, { message: "Bottom not found!" });
  }

  const updatedBottom = await prisma.bottonSection.update({
    where: { id: findBottom.id },
    data: request,
  });

  return updatedBottom;
};

export const deleteBottom = async (id: number) => {
  const findBottom = await prisma.bottonSection.findUnique({
    where: { id },
  });

  if (!findBottom) {
    throw new HTTPException(404, { message: "Bottom not found!" });
  }

  await prisma.bottonSection.delete({
    where: { id },
  });

  return true;
};
