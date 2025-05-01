import { prisma } from "@/lib/prisma";
import {
  CreateBrand,
  CreateBrandSchema,
  UpdateBrand,
  UpdateBrandSchema,
} from "./schema";
import { HTTPException } from "hono/http-exception";

export const getAllBrandSection = async () => {
  return await prisma.brand.findMany({
    orderBy: { id: "asc" },
  });
};

export const getBrandSection = async (id: number) => {
  const findBrand = await prisma.brand.findUnique({
    where: { id },
  });

  if (!findBrand) {
    throw new HTTPException(404, { message: "Brand not found!" });
  }

  return findBrand;
};

export const createBrandSection = async (request: CreateBrand) => {
  request = CreateBrandSchema.parse(request);

  const brand = await prisma.brand.create({
    data: { name: request.name, slug: request.name.toLowerCase() },
  });

  return brand;
};

export const updateBrandSection = async (request: UpdateBrand) => {
  request = UpdateBrandSchema.parse(request);

  const findBrand = await prisma.brand.findUnique({
    where: { id: request.id },
  });

  if (!findBrand) {
    throw new HTTPException(404, { message: "Brand not found!" });
  }

  const updatedBrand = await prisma.brand.update({
    where: { id: findBrand.id },
    data: request,
  });

  return updatedBrand;
};

export const deleteBrand = async (id: number) => {
  const findBrand = await prisma.brand.findUnique({
    where: { id },
  });

  if (!findBrand) {
    throw new HTTPException(404, { message: "Brand not found!" });
  }

  await prisma.brand.delete({
    where: { id },
  });

  return true;
};
