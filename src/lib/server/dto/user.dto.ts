import { UserRole } from '$lib/database/schemas/user.schema';
import { z } from 'zod';

export const RegisterUserDto = z.object({
	displayName: z.string().min(3),
	email: z.string().email(),
	photoURL: z.string().url(),
	role: z.enum([UserRole.CUSTOMER, UserRole.ADMIN]),
	hash: z.string()
});

export const LoginUserDto = z.object({
	email: z.string().email(),
	password: z.string()
});
