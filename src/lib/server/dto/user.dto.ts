import { z } from 'zod';

export const RegisterUserDto = z.object({
	displayName: z.string().min(3),
	email: z.string().email(),
	photoURL: z.string().url(),
	hash: z.string()
});

export const LoginUserDto = z.object({
	email: z.string().email(),
	password: z.string()
});
