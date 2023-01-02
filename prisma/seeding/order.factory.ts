import type { PrismaClient, CartItem, Customer } from '@prisma/client';
import { faker } from '@faker-js/faker';

export class OrderFactory {
	constructor(private prisma: PrismaClient) {}

	async createMany(
		count: number,
		cartItems: CartItem[],
		customers: Customer[]
	) {
		console.log('🔰Creating orders...');
		const orders = await Promise.all(
			Array.from({ length: count }).map(async () => {
				const order = await this.prisma.order.create({
					data: {
						shippingFee: +faker.commerce.price(),
						customerId: faker.helpers.arrayElement(customers).id,
						dishes: {
							connect: faker.helpers
								.shuffle(cartItems)
								.slice(0, faker.datatype.number({ min: 1, max: 5 }))
								.map((cartItem) => ({ id: cartItem.id }))
						}
					}
				});
				return order;
			})
		);
		return orders;
	}
}
