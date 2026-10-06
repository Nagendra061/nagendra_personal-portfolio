import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

function rootImagesPlugin() {
  return {
    name: 'root-images-sync',
    buildStart() {
      // Sync root images to public/images for production builds
      if (fs.existsSync('images') && fs.existsSync('public')) {
        fs.cpSync('images', 'public/images', { recursive: true, force: true })
      }
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/images/')) {
          const cleanUrl = req.url.split('?')[0]
          const filePath = path.join(process.cwd(), cleanUrl.replace(/^\//, ''))
          if (fs.existsSync(filePath)) {
            const ext = path.extname(filePath).toLowerCase()
            const mimeTypes = {
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.png': 'image/png',
              '.gif': 'image/gif',
              '.svg': 'image/svg+xml',
              '.webp': 'image/webp',
            }
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream')
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            fs.createReadStream(filePath).pipe(res)
            return
          }
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), rootImagesPlugin()],
  server: {
    port: 5173,
    watch: {
      ignored: [
        '**/css/**',
        '**/javascript/**',
        '**/*.jpg',
        '**/*.png',
        '**/*.jpeg',
        '**/*.ico',
      ],
    },
  },
})
