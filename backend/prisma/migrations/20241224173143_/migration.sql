/*
  Warnings:

  - You are about to drop the column `Courses` on the `User` table. All the data in the column will be lost.
  - Added the required column `Course` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `Courses`,
    ADD COLUMN `Course` VARCHAR(191) NOT NULL;
