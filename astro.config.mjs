import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    output: 'server',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    adapter: cloudflare()
});