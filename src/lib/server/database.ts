import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const db = {
	customer: prisma.customer,
	dish: prisma.dish,
	cartItem: prisma.cartItem,
	order: prisma.order
};
