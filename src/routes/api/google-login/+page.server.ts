import { error, fail, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/database';
import crypto from 'crypto';

export const actions: Actions = {
	async default({ request, cookies }) {
		const data = await request.formData();
		const email = data.get('email') as string;
		if (!email) {
			return fail(401, {
				message: 'Credentials incorrect',
				valid: false
			});
		}

		const userExist = await db.customer.findUnique({
			where: { email }
		});

		if (!userExist) {
			throw error(404, 'email not yet registered');
		}

		const authToken = crypto.randomUUID();
		await db.customer.update({
			where: { email },
			data: { sessionId: authToken }
		});

		cookies.set('session', authToken, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24
		});
	}
};
