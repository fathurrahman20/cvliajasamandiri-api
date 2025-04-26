import { prisma } from "@/lib/prisma";
import {
  CreateCar,
  CreateCarSchema,
  UpdateCar,
  UpdateCarSchema,
} from "./schema";
import { HTTPException } from "hono/http-exception";

export const getAllCarSection = async () => {
  return await prisma.car.findMany({
    include: { brand: true },
  });
};

export const getCarSection = async (id: number) => {
  const findCar = await prisma.car.findUnique({
    where: { id },
    include: { brand: true },
  });

  if (!findCar) {
    throw new HTTPException(404, { message: "Car not found!" });
  }

  return findCar;
};

const simplifySlug = (text: string) => {
  return text.toLowerCase().split(" ").join("-");
};

export const createCarSection = async (request: CreateCar) => {
  const validatedRequest = CreateCarSchema.parse(request);

  const data = {
    ...validatedRequest,
    slug: simplifySlug(validatedRequest.name),
  };

  const car = await prisma.car.create({
    data,
  });

  return car;
};

export const updateCarSection = async (request: UpdateCar) => {
  request = UpdateCarSchema.parse(request);

  const findCar = await prisma.car.findUnique({
    where: { id: request.id },
  });

  if (!findCar) {
    throw new HTTPException(404, { message: "Car not found!" });
  }

  const updatedCar = await prisma.car.update({
    where: { id: findCar.id },
    data: request,
  });

  return updatedCar;
};

export const deleteCar = async (id: number) => {
  const findCar = await prisma.car.findUnique({
    where: { id },
  });

  if (!findCar) {
    throw new HTTPException(404, { message: "Car not found!" });
  }

  await prisma.car.delete({
    where: { id },
  });

  return true;
};
