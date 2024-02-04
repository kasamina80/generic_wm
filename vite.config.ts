import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import react from '@vitejs/plugin-react'
import ReactRefresh from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [
    RubyPlugin(),
    react(),
    ReactRefresh(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  source_code_dir: 'app/frontend', // Set the path to your source code directory
})