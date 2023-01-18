import type { CartItem, Customer, Order } from '@prisma/client';
export interface AppUser extends Customer {
	cart: CartItem[];
	Orders: Order[];
}
