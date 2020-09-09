var cache = {}

module.exports = {
  register(path, source) {
    if (!cache[path]) {
      cache[path] = {}
    }
    cache[path] = source
  },
  getSources() {
    return cache
  },
  cleanCache() {
    cache = {}
  },
}
