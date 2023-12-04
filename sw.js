    importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

    if (self.__WB_MANIFEST) {
        workbox.precaching.precache(self.__WB_MANIFEST);
    }


    self.addEventListener("fetch", (event) => {
        // Si quieres ignorar ciertas solicitudes, puedes hacerlo aquí
    if (event.request.url.includes("/api/")) {
        return;
    }
    // Intenta obtener el recurso desde la caché
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
        // Si se encuentra en caché, devuélvelo
        if (cachedResponse) {
            return cachedResponse;
        }

        // Si no está en caché, realiza la solicitud a la red
        return fetch(event.request)
            .then((networkResponse) => {
            // Si la solicitud a la red es exitosa, guárdala en caché para futuras solicitudes
            if (networkResponse.ok) {
                // Clona la respuesta antes de guardarla en caché y devolverla
                const clonedResponse = networkResponse.clone();
                caches.open("my-cache-name").then((cache) => {
                cache.put(event.request, clonedResponse);
                });
                return networkResponse;
            }

            // Si la solicitud a la red falla, puedes manejarlo aquí
            // Puedes devolver una respuesta por defecto o una página de error personalizada
            return new Response("Network request failed", { status: 500 });
            })
            .catch((error) => {
            console.error("Fetch error:", error);
            // Puedes devolver una respuesta por defecto o una página de error personalizada
            return new Response("Fetch failed", { status: 500 });
            });
        })
    );
});
