import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    tailwindcss(),

    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
      },

      mozjpeg: {
        quality: 75,
      },

      pngquant: {
        quality: [0.7, 0.8],
      },

      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
        ],
      },
    }),
  ],
})