import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Azure Storage 루트 경로에 배포하는 설정
// 이 파일을 사용하려면: mv vite.config.ts vite.config.backup.ts && mv vite.config.root.ts vite.config.ts

export default defineConfig({
  plugins: [react()],
  // 루트 경로 배포
  base: '/',
  server: {
    host: true,
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})

