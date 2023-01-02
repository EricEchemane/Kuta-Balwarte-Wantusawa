import { db } from '$lib/server/database';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const dishes = await db.dish.findMany();
	return { dishes };
}) satisfies LayoutServerLoad;
