import { db } from '$lib/server/database';
import { AddToCartDto } from '$lib/server/dto';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	const user = locals.user;
	if (!user) throw redirect(302, '/login');

	const dishId = params.dishId;

	const dish = await db.dish.findUnique({ where: { id: dishId } });

	if (!dish) throw redirect(302, '/404');

	return { user, dish };
}) satisfies PageServerLoad;

export const actions: Actions = {
	async default({ request }) {
		const formData = Object.fromEntries(await request.formData());
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(formData as any).quantity = Number(formData.quantity);
		const validation = AddToCartDto.safeParse(formData);

		if (!validation.success) {
			return fail(401, {
				message: validation.error.errors[0].message,
				valid: false
			});
		}

		const { customerId, dishId, quantity } = validation.data;

		const newCartItem = await db.cartItem.create({
			data: {
				quantity: quantity,
				dish: {
					connect: {
						id: dishId
					}
				},
				Customer: {
					connect: {
						id: customerId
					}
				}
			}
		});

		return {
			valid: true,
			newCartItem
		};
	}
};
