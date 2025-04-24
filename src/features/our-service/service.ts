import { prisma } from "@/lib/prisma";
import {
  CreateOurService,
  CreateOurServiceSchema,
  UpdateOurService,
  UpdateOurServiceSchema,
} from "./schema";
import { HTTPException } from "hono/http-exception";

export const getAllOurServiceSection = async () => {
  return await prisma.ourService.findMany();
};

export const getOurServiceSection = async (id: number) => {
  const findOurService = await prisma.ourService.findUnique({
    where: { id },
  });

  if (!findOurService) {
    throw new HTTPException(404, { message: "OurService not found!" });
  }

  return findOurService;
};

export const createOurServiceSection = async (request: CreateOurService) => {
  request = CreateOurServiceSchema.parse(request);

  const ourService = await prisma.ourService.create({
    data: request,
  });

  return ourService;
};

export const updateOurServiceSection = async (request: UpdateOurService) => {
  request = UpdateOurServiceSchema.parse(request);

  const findOurService = await prisma.ourService.findUnique({
    where: { id: request.id },
  });

  if (!findOurService) {
    throw new HTTPException(404, { message: "OurService not found!" });
  }

  const updatedOurService = await prisma.ourService.update({
    where: { id: findOurService.id },
    data: request,
  });

  return updatedOurService;
};

export const deleteOurService = async (id: number) => {
  const findOurService = await prisma.ourService.findUnique({
    where: { id },
  });

  if (!findOurService) {
    throw new HTTPException(404, { message: "OurService not found!" });
  }

  await prisma.ourService.delete({
    where: { id },
  });

  return true;
};
