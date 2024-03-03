import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import react from '@vitejs/plugin-react'
import ReactRefresh from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  build: {
    minify: false,
    outDir: "dist",
  },
  plugins: [
    RubyPlugin(),
    react(),
    ReactRefresh(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
})
