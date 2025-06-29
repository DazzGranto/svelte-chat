import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const username = cookies.get('username');

	if (!username) return redirect(303, '/');

	return { username };
};
