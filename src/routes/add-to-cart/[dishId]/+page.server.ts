import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	const user = locals.user;
	if (!user) throw redirect(302, '/login');

	const dishId = params.dishId;

	return { user, dishId };
}) satisfies PageServerLoad;
