import type { Dish } from '@prisma/client';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const dishes: Dish[] = [];
	return { dishes };
}) satisfies LayoutServerLoad;
