import { prisma } from "@/lib/prisma";
import {
  CreateCompanyAbout,
  CreateCompanyAboutSchema,
  UpdateCompanyAbout,
  UpdateCompanyAboutSchema,
} from "./schema";
import { HTTPException } from "hono/http-exception";

export const getAllCompanyAboutSection = async () => {
  return await prisma.companyAbout.findMany();
};

export const getCompanyAboutSection = async (id: number) => {
  const findCompanyAbout = await prisma.companyAbout.findUnique({
    where: { id },
  });

  if (!findCompanyAbout) {
    throw new HTTPException(404, { message: "CompanyAbout not found!" });
  }

  return findCompanyAbout;
};

export const createCompanyAboutSection = async (
  request: CreateCompanyAbout
) => {
  request = CreateCompanyAboutSchema.parse(request);

  const data = {
    ...request,
    imageUrl: request.imageUrl ?? null, // ubah undefined jadi null
  };

  const hero = await prisma.companyAbout.create({
    data,
  });

  return hero;
};

export const updateCompanyAboutSection = async (
  request: UpdateCompanyAbout
) => {
  request = UpdateCompanyAboutSchema.parse(request);

  const findCompanyAbout = await prisma.companyAbout.findUnique({
    where: { id: request.id },
  });

  if (!findCompanyAbout) {
    throw new HTTPException(404, { message: "CompanyAbout not found!" });
  }

  const updatedCompanyAbout = await prisma.companyAbout.update({
    where: { id: findCompanyAbout.id },
    data: request,
  });

  return updatedCompanyAbout;
};

export const deleteCompanyAbout = async (id: number) => {
  const findCompanyAbout = await prisma.companyAbout.findUnique({
    where: { id },
  });

  if (!findCompanyAbout) {
    throw new HTTPException(404, { message: "CompanyAbout not found!" });
  }

  await prisma.companyAbout.delete({
    where: { id },
  });

  return true;
};
