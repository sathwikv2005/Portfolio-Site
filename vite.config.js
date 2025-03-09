import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:6700',
				changeOrigin: true,
				secure: false,
			},
		},
		host: true,
		allowedHosts: [
			'localhost',
			'127.0.0.1',
			'192.168.137.1',
			'192.168.193.61',
			'172.18.180.53',
			'server.lan',
		],
	},
})
