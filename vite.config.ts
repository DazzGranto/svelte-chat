import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vite';
import { Server } from 'socket.io';
import { registerSocketEvents } from './server/registerSocketEvents';

const socketio: Plugin = {
	name: 'socketio',
	configureServer({ httpServer }) {
		if (!httpServer) throw new Error('Http server not found');

		const io = new Server(httpServer, { cors: { origin: '*' } });

		io.on('connection', (socket) => registerSocketEvents(io, socket));
	}
};

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), devtoolsJson(), socketio]
});
