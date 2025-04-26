/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_brandId_fkey";

-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "features" TEXT NOT NULL,
    "imageUrl" VARCHAR(255),
    "brandId" INTEGER NOT NULL,
    "priceFullDay" DOUBLE PRECISION NOT NULL,
    "priceHalfDay" DOUBLE PRECISION NOT NULL,
    "priceFullDayInCity" DOUBLE PRECISION,
    "priceHalfDayInCity" DOUBLE PRECISION,
    "priceFullDayOutCity" DOUBLE PRECISION,
    "priceHalfDayOutCity" DOUBLE PRECISION,
    "year" INTEGER NOT NULL,
    "fuelType" VARCHAR(100) NOT NULL,
    "transmission" VARCHAR(100) NOT NULL,
    "maxPassengers" INTEGER NOT NULL,
    "payloadCapacity" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_slug_key" ON "Car"("slug");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
