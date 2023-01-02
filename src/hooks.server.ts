import { db } from '$lib/server/database';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('session');

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	// find the user based on the session
	const user = await db.customer.findFirst({
		where: { sessionId: session }
	});
	const _user = JSON.parse(JSON.stringify(user));
	delete _user.hash;

	event.locals.user = _user;

	// load page as normal
	return await resolve(event);
};
