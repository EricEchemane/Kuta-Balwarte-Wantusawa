import { db } from '$lib/server/database';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const dishes = await db.dish.findMany({
		orderBy: { ordered: 'desc' },
		take: 6
	});

	return { dishes, user: locals.user };
}) satisfies LayoutServerLoad;
