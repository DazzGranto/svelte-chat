/**
 * Registers socket events for dev and prod server.
 * @param {import('socket.io').Server} io
 * @param {import('socket.io').Socket} socket
 */
export const registerSocketEvents = (io, socket) => {
	console.log('SOCKET CONNECTED:', socket.id);
};
