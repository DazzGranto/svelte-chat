import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;
	const username = event.cookies.get('username');

	if (username && pathname === '/') return redirect(303, '/chat');
	if (!username && pathname !== '/') return redirect(303, '/');

	return resolve(event);
};
