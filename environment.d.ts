declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      PORT?: string
      DATABASE_URL: string
      DB_NAME: string
      MONGO_URI: string
    }
  }
}

export { }