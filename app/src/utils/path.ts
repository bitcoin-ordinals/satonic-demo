const isProd = process.env.NODE_ENV === 'production'

export const getBasePath = (path: string) => {
  return isProd ? `/satonic-demo${path}` : path
} 