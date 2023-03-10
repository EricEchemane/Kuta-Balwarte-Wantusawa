import { fail, redirect, type Actions } from '@sveltejs/kit';
import { LoginUserDto } from '$lib/server/dto';
import { db } from '$lib/server/database';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(303, '/');
	}
};

export const actions: Actions = {
	async default({ request, cookies }) {
		const formData = Object.fromEntries(await request.formData());

		const validation = LoginUserDto.safeParse(formData);

		if (!validation.success) {
			return fail(401, {
				message: validation.error.errors[0].message,
				valid: false
			});
		}

		const { email, password } = validation.data;

		const userExist = await db.customer.findUnique({ where: { email } });
		if (!userExist) {
			return fail(401, { message: 'Credentials incorrect', valid: false });
		}

		const passwordMatches = await bcrypt.compare(password, userExist.hash);
		if (!passwordMatches) {
			return fail(401, { message: 'Credentials incorrect', valid: false });
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

		throw redirect(302, '/menu');
	}
};
