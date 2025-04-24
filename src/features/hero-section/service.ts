import { prisma } from "@/lib/prisma";
import {
  CreateHero,
  CreateHeroSchema,
  UpdateHero,
  UpdateHeroSchema,
} from "./schema";
import { HTTPException } from "hono/http-exception";

export const getAllHeroSection = async () => {
  return await prisma.heroSection.findMany();
};

export const getHeroSection = async (id: number) => {
  const findHero = await prisma.heroSection.findUnique({
    where: { id },
  });

  if (!findHero) {
    throw new HTTPException(404, { message: "Hero not found!" });
  }

  return findHero;
};

export const createHeroSection = async (request: CreateHero) => {
  request = CreateHeroSchema.parse(request);

  const hero = await prisma.heroSection.create({
    data: request,
  });

  return hero;
};

export const updateHeroSection = async (request: UpdateHero) => {
  request = UpdateHeroSchema.parse(request);

  const findHero = await prisma.heroSection.findUnique({
    where: { id: request.id },
  });

  if (!findHero) {
    throw new HTTPException(404, { message: "Hero not found!" });
  }

  const updatedHero = await prisma.heroSection.update({
    where: { id: findHero.id },
    data: request,
  });

  return updatedHero;
};

export const deleteHero = async (id: number) => {
  const findHero = await prisma.heroSection.findUnique({
    where: { id },
  });

  if (!findHero) {
    throw new HTTPException(404, { message: "Hero not found!" });
  }

  await prisma.heroSection.delete({
    where: { id },
  });

  return true;
};
