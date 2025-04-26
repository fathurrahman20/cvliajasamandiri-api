/*
  Warnings:

  - You are about to drop the column `priceFullDayInCity` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `priceHalfDayInCity` on the `Car` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "priceFullDayInCity",
DROP COLUMN "priceHalfDayInCity";
