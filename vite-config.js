import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// ... otras configuraciones ...

export default defineConfig({
  // ... otras configuraciones ...

    plugins: [
        VitePWA({
        // Configuración de Workbox
        includeAssets: ['favicon.ico', 'robots.txt', 'icons/*'],
        manifest: {
            name: 'Mi Aplicación',
            short_name: 'App',
            description: 'Una descripción de mi aplicación',
            start_url: '.',
            display: 'standalone',
            background_color: '#ffffff',
            theme_color: '#000000',
            icons: [
            {
                src: 'icons/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: 'icons/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            ],
        },
        }),
        // ... otros plugins ...
    ],
});
