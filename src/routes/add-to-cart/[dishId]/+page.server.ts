import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	const user = locals.user;
	const dishId = params.dishId;

	return { user, dishId };
}) satisfies PageServerLoad;
