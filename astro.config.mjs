import { defineConfig, squooshImageService } from "astro/config";

export default defineConfig({
    image: {
        service: {
            entrypoint: "astro/assets/services/noop",
        }
    }
})