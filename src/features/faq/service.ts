import { prisma } from "@/lib/prisma";
import {
  CreateFaq,
  CreateFaqSchema,
  UpdateFaq,
  UpdateFaqSchema,
} from "./schema";
import { HTTPException } from "hono/http-exception";

export const getAllFaqSection = async () => {
  return await prisma.faq.findMany();
};

export const getFaqSection = async (id: number) => {
  const findFaq = await prisma.faq.findUnique({
    where: { id },
  });

  if (!findFaq) {
    throw new HTTPException(404, { message: "Faq not found!" });
  }

  return findFaq;
};

export const createFaqSection = async (request: CreateFaq) => {
  request = CreateFaqSchema.parse(request);

  const faq = await prisma.faq.create({
    data: request,
  });

  return faq;
};

export const updateFaqSection = async (request: UpdateFaq) => {
  request = UpdateFaqSchema.parse(request);

  const findFaq = await prisma.faq.findUnique({
    where: { id: request.id },
  });

  if (!findFaq) {
    throw new HTTPException(404, { message: "Faq not found!" });
  }

  const updatedFaq = await prisma.faq.update({
    where: { id: findFaq.id },
    data: request,
  });

  return updatedFaq;
};

export const deleteFaq = async (id: number) => {
  const findFaq = await prisma.faq.findUnique({
    where: { id },
  });

  if (!findFaq) {
    throw new HTTPException(404, { message: "Faq not found!" });
  }

  await prisma.faq.delete({
    where: { id },
  });

  return true;
};
