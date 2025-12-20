import { createApp } from './app';
import { config } from './config/env';

const app = createApp();

const server = app.listen(config.port, () => {
	console.log(`🚀 Server running on port ${config.port}`);
	console.log(`📝 Environment: ${config.nodeEnv}`);
	console.log(`🏥 Health check: http://localhost:${config.port}/api/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
	console.log('SIGTERM received, shutting down gracefully');
	server.close(() => {
		console.log('Process terminated');
	});
});

