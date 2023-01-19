import { db } from '$lib/server/database';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	const user = locals.user;
	if (!user) throw redirect(302, '/login');

	const dishId = params.dishId;

	const dish = await db.dish.findUnique({ where: { id: dishId } });

	if (!dish) throw redirect(302, '/404');

	return { user, dish };
}) satisfies PageServerLoad;
