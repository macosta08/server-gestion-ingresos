/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Concepto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `color` to the `Concepto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Concepto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Concepto" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Concepto_name_key" ON "Concepto"("name");
