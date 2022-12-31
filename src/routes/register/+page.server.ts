import { db } from '$lib/database';
import { UserRole } from '$lib/database/schemas/user.schema';
import { RegisterUserDto } from '$lib/server/dto';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import type { MongooseError } from 'mongoose';

export const actions: Actions = {
	async default({ request }) {
		try {
			const formData = Object.fromEntries(await request.formData());

			const validation = RegisterUserDto.safeParse({
				...formData,
				role: UserRole.CUSTOMER,
				hash: await bcrypt.hash(formData.hash.toString(), 10)
			});

			if (!validation.success) {
				return fail(400, { message: validation.error.errors[0].message, valid: false });
			}

			await db.user.create(validation.data);

			throw redirect(303, '/login');
		} catch (error: unknown) {
			const e = error as MongooseError;
			if (e.message.startsWith('E11000')) {
				return fail(400, {
					message: 'Credentials already taken. Please use a different account',
					valid: false
				});
			}
			return fail(400, { message: e.message, valid: false });
		}
	}
};
