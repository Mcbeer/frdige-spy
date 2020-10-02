import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import { json, Request, Response } from 'express';
import * as helmet from 'helmet';
import * as io from 'socket.io';
import database from './db/connection';
import errorHandler from './middleware/errorHandler';
import { app } from './server';
import { accountService } from './services/account.service';
import { authenticationService } from './services/authentication.service';
import { locationService } from './services/location.service';
import { productService } from './services/product.service';
import { userService } from './services/user.service';
import { logger } from './utils/logger';
import { perhaps } from './utils/perhaps';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const port = process.env.PORT;

const socket = io();

const originWhitelist = [
	'http://localhost:3000',
	'http://192.168.87.148:3000',
	'http://192.168.87.148.xip.io:3000',
];

app.use(
	cors({
		credentials: true,
		origin: function (origin, callback) {
			callback(null, true);
			// // callback(null, true);
			// if (originWhitelist.indexOf(origin) !== -1) {
			// 	callback(null, true);
			// } else {
			// 	callback(new Error('Not allowed by CORS'));
			// }
		},
	})
);
app.use(json());
app.use(compression());
app.use(helmet());
app.use(cookieParser());

app.get('/', (_req: Request, res: Response) => {
	res.send('Fridge Spy API');
});

// Register all our services
app.use('/user', userService);
app.use('/account', accountService);
app.use('/product', productService);
app.use('/location', locationService);
app.use('/auth', authenticationService);

// Error handler
app.use(errorHandler);

// Start listening
const createServer = async () => {
	const [migrationError] = await perhaps(database.migrate.latest());

	if (migrationError) {
		throw new Error('Migration failed');
	}
	const server = app.listen(port, async () => {
		logger.info('Server started on port ' + port);
	});
	socket.listen(server);

	socket.on('connection', () => {
		console.log('Received connection from client');

		socket.emit('message', 'HELLO');
	});
};

createServer();
