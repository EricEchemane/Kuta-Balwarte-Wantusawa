import type { User } from '$lib/database/schemas';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const user: User = locals.user;
	return { user };
}) satisfies LayoutServerLoad;
