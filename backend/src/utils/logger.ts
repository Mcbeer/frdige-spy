import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
	level: 'info',
	format: format.combine(
		format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
		format.simple()
	),
	defaultMeta: { service: 'fridge-spy' },
	transports: [new transports.Console()],
});
