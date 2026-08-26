import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
        distribution: resolve(__dirname, 'distribution.html'),
        requestQuote: resolve(__dirname, 'request-quote.html'),
        investors: resolve(__dirname, 'investors.html'),
        contact: resolve(__dirname, 'contact.html'),
      }
    }
  }
})