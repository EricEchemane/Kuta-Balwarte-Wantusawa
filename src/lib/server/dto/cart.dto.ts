import { z } from 'zod';

export const AddToCartDto = z.object({
	quantity: z.number().min(1),
	dishId: z.string(),
	customerId: z.string()
});
