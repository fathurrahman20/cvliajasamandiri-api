/*
  Warnings:

  - Made the column `imageUrl` on table `Car` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "imageUrl" SET NOT NULL,
ALTER COLUMN "priceHalfDay" DROP NOT NULL;
