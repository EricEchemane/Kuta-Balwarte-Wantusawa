import type { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import bycrypt from 'bcryptjs';

export class CustomerFactory {
	constructor(private prisma: PrismaClient) {}

	async createMany(count: number) {
		console.log('🔰Creating customers...');
		const customers = await Promise.all(
			Array.from({ length: count }).map(async () => {
				const password = await bycrypt.hash('password', 10);
				const customer = await this.prisma.customer.create({
					data: {
						address: faker.address.streetAddress(),
						displayName: faker.name.firstName(),
						email: faker.internet.email(),
						hash: password,
						phone: faker.phone.number(),
						photoUrl: faker.image.imageUrl()
					}
				});
				return customer;
			})
		);
		return customers;
	}
}
