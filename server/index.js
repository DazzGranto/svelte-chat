import polka from 'polka';
import { handler } from '../build/handler.js';
import { Server } from 'socket.io';
import { registerSocketEvents } from './registerSocketEvents.js';

const PORT = process.env.PORT ?? 3000;

const app = polka();

app.use(handler);

const { server: httpServer } = app.listen(PORT, () =>
	console.log(`> Running on http://localhost:${PORT}`)
);

const io = new Server(httpServer);

io.on('connection', (socket) => registerSocketEvents(io, socket));
