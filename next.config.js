const path = require('path')
const { WEBPACK_LAYERS } = require('next/dist/lib/constants')

class ModifyWorkerPublicPathPlugin {
  apply(compiler) {
    compiler.options.output.workerPublicPath = "./"
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  webpack(config, { isServer, nextRuntime }) {
    if (isServer && nextRuntime === 'nodejs') {
      console.log(WEBPACK_LAYERS)
      config.plugins.push(new ModifyWorkerPublicPathPlugin())
      return {
        ...config,
        // workerPublicPath: './',
        entry() {
          return config.entry().then(entry => {
            return {
              ...entry,
              worker: path.resolve(process.cwd(), 'src/worker/test.worker.ts'),
            }
          })
        }
      }
    }
    
    return config
  }
}

module.exports = nextConfig
