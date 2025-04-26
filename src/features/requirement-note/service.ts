import { prisma } from "@/lib/prisma";
import {
  CreateRequirementNote,
  CreateRequirementNoteSchema,
  UpdateRequirementNote,
  UpdateRequirementNoteSchema,
} from "./schema";
import { HTTPException } from "hono/http-exception";

export const getAllRequirementNoteSection = async () => {
  return await prisma.requirementNote.findMany();
};

export const getRequirementNoteSection = async (id: number) => {
  const findRequirementNote = await prisma.requirementNote.findUnique({
    where: { id },
  });

  if (!findRequirementNote) {
    throw new HTTPException(404, { message: "RequirementNote not found!" });
  }

  return findRequirementNote;
};

export const createRequirementNoteSection = async (
  request: CreateRequirementNote
) => {
  request = CreateRequirementNoteSchema.parse(request);

  const requirementNote = await prisma.requirementNote.create({
    data: request,
  });

  return requirementNote;
};

export const updateRequirementNoteSection = async (
  request: UpdateRequirementNote
) => {
  request = UpdateRequirementNoteSchema.parse(request);

  const findRequirementNote = await prisma.requirementNote.findUnique({
    where: { id: request.id },
  });

  if (!findRequirementNote) {
    throw new HTTPException(404, { message: "RequirementNote not found!" });
  }

  const updatedRequirementNote = await prisma.requirementNote.update({
    where: { id: findRequirementNote.id },
    data: request,
  });

  return updatedRequirementNote;
};

export const deleteRequirementNote = async (id: number) => {
  const findRequirementNote = await prisma.requirementNote.findUnique({
    where: { id },
  });

  if (!findRequirementNote) {
    throw new HTTPException(404, { message: "RequirementNote not found!" });
  }

  await prisma.requirementNote.delete({
    where: { id },
  });

  return true;
};
