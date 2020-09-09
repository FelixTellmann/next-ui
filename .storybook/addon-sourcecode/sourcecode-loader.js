const cache = require('./cache')

module.exports = function sourceLoader(source) {
  const opts = this.query || {}
  const { root = '', components = '' } = opts
  const path = this.resourcePath

  if (!components || path.includes(components)) {
    cache.register(
        path.replace(root, '.').replace(/\.(mdx|tsx|ts|js|jsx)$/, '').replace(/\\/g, '/'),
        source
    )
  }
  // if it was a test file we don't want to execute it
  return path.match('.test.')  ? '' : source
}
