// TODO: Implement API service
// This should handle all HTTP requests to the backend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const api = {
	async get(endpoint: string) {
		// TODO: Implement GET request
		// Include auth token in headers if authenticated
		throw new Error('Not implemented');
	},

	async post(endpoint: string, data: unknown) {
		// TODO: Implement POST request
		// Include auth token in headers if authenticated
		throw new Error('Not implemented');
	},

	async put(endpoint: string, data: unknown) {
		// TODO: Implement PUT request
		throw new Error('Not implemented');
	},

	async delete(endpoint: string) {
		// TODO: Implement DELETE request
		throw new Error('Not implemented');
	},
};

