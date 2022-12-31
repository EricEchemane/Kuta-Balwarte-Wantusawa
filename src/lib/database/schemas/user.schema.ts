import mongoose, { Schema, type InferSchemaType, model } from 'mongoose';

export enum UserRole {
	CUSTOMER = 'CUSTOMER',
	ADMIN = 'ADMIN'
}

export function isValidEmail(email: string) {
	const regexp = new RegExp(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
	return regexp.test(email);
}

const UserSchema = new Schema(
	{
		role: { type: String, required: [true, 'Invalid role'], enum: UserRole },
		displayName: {
			type: String,
			required: [true, 'Display name is required'],
			minLength: 3,
			maxLength: 50
		},
		email: {
			type: String,
			required: true,
			unique: true,
			validate: {
				validator: isValidEmail,
				message: 'email must be an email'
			}
		},
		photoURL: {
			type: String,
			required: [true, 'Photo url is required']
		},
		authToken: { type: String, default: '' },
		hash: { type: String, required: true }
	},
	{
		timestamps: true
	}
);

export type User = InferSchemaType<typeof UserSchema>;
export const UserModel = mongoose.models.User || model('User', UserSchema);
