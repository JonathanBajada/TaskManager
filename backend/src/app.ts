import express, { Express } from 'express';
import cors from 'cors';
import routes from './routes';
import { errorHandler } from './errors/errorHandler';
import { logger } from './middleware';

export const createApp = (): Express => {
	const app = express();

	// Middleware
	app.use(cors());
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(logger);

	// Routes
	app.use('/api', routes);

	// Error handling (must be last)
	app.use(errorHandler);

	return app;
};

