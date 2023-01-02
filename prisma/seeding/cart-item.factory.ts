import type { PrismaClient, Dish, Customer } from '@prisma/client';
import { faker } from '@faker-js/faker';

export class CartItemFactory {
	constructor(private prisma: PrismaClient) {}

	async createMany(count: number, dishes: Dish[], customers: Customer[]) {
		console.log('🔰Creating cart items...');
		const cartItems = await Promise.all(
			Array.from({ length: count }).map(async () => {
				const cartItem = await this.prisma.cartItem.create({
					data: {
						quantity: faker.datatype.number({ min: 1, max: 10 }),
						customerId: faker.helpers.arrayElement(customers).id,
						dishId: faker.helpers.arrayElement(dishes).id
					}
				});
				return cartItem;
			})
		);
		return cartItems;
	}
}
