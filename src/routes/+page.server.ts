import type { User } from '$lib/database/schemas';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const user: User = locals.user;
	return { user };
}) satisfies PageServerLoad;

export const actions: Actions = {
	async logout({ cookies }) {
		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		});
		throw redirect(302, '/login');
	}
};
