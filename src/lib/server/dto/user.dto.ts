import { z } from 'zod';

export const RegisterUserDto = z.object({
	email: z.string().email(),
	hash: z.string(),
	displayName: z.string().min(3),
	photoURL: z.string().url(),
	address: z.string().min(5),
	phone: z.string().min(11)
});

export const LoginUserDto = z.object({
	email: z.string().email(),
	password: z.string()
});
