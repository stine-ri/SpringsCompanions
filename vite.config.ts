import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import VitePluginSitemap  from 'vite-plugin-sitemap'

const routes = [
  '/',
  '/about',
  '/services', 
  '/contact',
  '/faq',
]

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePluginSitemap({
      hostname: 'https://www.springscompanions.com',
      dynamicRoutes: routes,
      generateRobotsTxt: true,
    }),
  ],
})