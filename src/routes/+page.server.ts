import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	async logout({ cookies }) {
		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		});
		throw redirect(302, '/');
	}
};
