-- AlterTable
ALTER TABLE "Dish" ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "ordered" INTEGER NOT NULL DEFAULT 0;