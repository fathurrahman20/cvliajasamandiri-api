/*
  Warnings:

  - Added the required column `imageId` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "imageId" VARCHAR(255) NOT NULL;
