
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';


export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'main-app',
      remotes: {
        music: 'http://music-library-mauve.vercel.app/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom']
    })
  ],
   server: {
    port: 5173,
  },
  build: {
    target: 'esnext'
  }
})




