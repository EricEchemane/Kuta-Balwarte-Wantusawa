import { db } from '$lib/server/database';
import { RegisterUserDto } from '$lib/server/dto';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(303, '/');
	}
};

export const actions: Actions = {
	async default({ request }) {
		const formData = Object.fromEntries(await request.formData());

		const validation = RegisterUserDto.safeParse({
			...formData,
			hash: await bcrypt.hash(formData.hash.toString(), 10)
		});

		if (!validation.success) {
			return fail(400, {
				message: validation.error.errors[0].message,
				valid: false
			});
		}

		await db.customer.create({ data: validation.data });

		throw redirect(303, '/login');
	}
};
