import { CartItemFactory } from './cart-item.factory';
import { PrismaClient } from '@prisma/client';
import { CustomerFactory } from './customer.factory';
import { DishFactory } from './dish.factory';
import { OrderFactory } from './order.factory';

const prisma = new PrismaClient();

async function main() {
	const userFactory = new CustomerFactory(prisma);
	const dishFactory = new DishFactory(prisma);
	const cartItemFactory = new CartItemFactory(prisma);
	const ordersFactory = new OrderFactory(prisma);

	const customers = await userFactory.createMany(20);
	const dishes = await dishFactory.createMany(40);
	const cartItems = await cartItemFactory.createMany(
		40,
		dishes,
		customers
	);
	const orders = await ordersFactory.createMany(40, cartItems, customers);

	return {
		customers,
		dishes,
		cartItems,
		orders
	};
}

main()
	.then(async () => {
		await prisma.$disconnect();
		console.info('✅Done seeding database');
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
