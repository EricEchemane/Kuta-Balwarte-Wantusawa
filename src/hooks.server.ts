import { connectDatabase } from '$lib/database';
import type { Handle } from '@sveltejs/kit';
import { db } from '$lib/database';

connectDatabase();

export const handle: Handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('session');

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	// find the user based on the session
	const user = await db.user.findOne({ authToken: session });
	const _user = JSON.parse(JSON.stringify(user));
	delete _user.hash;

	event.locals.user = _user;

	// load page as normal
	return await resolve(event);
};
