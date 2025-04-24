/*
  Warnings:

  - Added the required column `fuelType` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxPassengers` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transmission` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Faq" ALTER COLUMN "answer" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "fuelType" VARCHAR(100) NOT NULL,
ADD COLUMN     "maxPassengers" INTEGER NOT NULL,
ADD COLUMN     "transmission" VARCHAR(100) NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL,
ALTER COLUMN "features" SET DATA TYPE TEXT;
