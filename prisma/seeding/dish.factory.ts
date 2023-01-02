import type { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

export class DishFactory {
	constructor(private prisma: PrismaClient) {}

	async createMany(count: number) {
		console.log(`🔰Creating ${count} dishes...`);
		const dishes = await Promise.all(
			Array.from({ length: count }).map(async () => {
				return await this.prisma.dish.create({
					data: {
						name: faker.commerce.productName(),
						photoUrl: faker.image.food(),
						price: +faker.commerce.price(),
						likes: +faker.datatype.number(100),
						ordered: +faker.datatype.number(100)
					}
				});
			})
		);

		return dishes;
	}
}
