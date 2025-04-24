import { prisma } from "@/lib/prisma";
import {
  CreateFooter,
  CreateFooterSchema,
  UpdateFooter,
  UpdateFooterSchema,
} from "./schema";
import { HTTPException } from "hono/http-exception";

export const getAllFooterSection = async () => {
  return await prisma.footer.findMany();
};

export const getFooterSection = async (id: number) => {
  const findFooter = await prisma.footer.findUnique({
    where: { id },
  });

  if (!findFooter) {
    throw new HTTPException(404, { message: "Footer not found!" });
  }

  return findFooter;
};

export const createFooterSection = async (request: CreateFooter) => {
  request = CreateFooterSchema.parse(request);

  const footer = await prisma.footer.create({
    data: request,
  });

  return footer;
};

export const updateFooterSection = async (request: UpdateFooter) => {
  request = UpdateFooterSchema.parse(request);

  const findFooter = await prisma.footer.findUnique({
    where: { id: request.id },
  });

  if (!findFooter) {
    throw new HTTPException(404, { message: "Footer not found!" });
  }

  const updatedFooter = await prisma.footer.update({
    where: { id: findFooter.id },
    data: request,
  });

  return updatedFooter;
};

export const deleteFooter = async (id: number) => {
  const findFooter = await prisma.footer.findUnique({
    where: { id },
  });

  if (!findFooter) {
    throw new HTTPException(404, { message: "Footer not found!" });
  }

  await prisma.footer.delete({
    where: { id },
  });

  return true;
};
