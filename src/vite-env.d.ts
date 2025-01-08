/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_BASE_URL: string
  // Add other env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}