import * as path from 'path'

export function getRootPath() {
  if (process.env.NODE_ENV === 'development') {
    return __dirname;
  } else if (process.env.NODE_ENV === 'production') {
    return path.resolve(__dirname, '../')
  }
  return ''
}