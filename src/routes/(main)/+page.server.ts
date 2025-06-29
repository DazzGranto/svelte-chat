import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const username = formData.get('username')?.toString().trim();

		if (!username) return fail(400, { error: 'username is required' });

		if (username.length < 3 || username.length > 32)
			return fail(400, { error: 'username must be 3-32 characters long' });

		cookies.set('username', username, {
			path: '/',
			maxAge: 60 * 60 * 24 * 7 // 7 days
		});

		redirect(303, '/chat');
	}
};
