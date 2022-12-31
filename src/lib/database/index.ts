import { MONGODB_URI } from '$env/static/private';
import mongoose from 'mongoose';
import { UserModel } from './schemas';

export async function connectDatabase() {
	mongoose.set('strictQuery', false);

	const notConnected = mongoose.connection.readyState !== 1;
	console.info('🔰Mongodb connection status:', notConnected ? 'not connected' : 'connected');

	if (notConnected) {
		console.info('🔰Connecting to mongodb...');

		await mongoose.connect(MONGODB_URI, { dbName: 'test' }).catch((error) => {
			console.error('❌Error connecting to mongodb:', error);
		});

		console.info('🔰mongodb connected');
	}
}

export const db = {
	user: UserModel
};
