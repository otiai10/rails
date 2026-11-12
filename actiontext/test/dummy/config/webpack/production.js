const environment = require('./environment')

const config = environment.toWebpackConfig()
// 旧圧縮キャッシュのMD4を避け、圧縮処理自体は維持する。
config.plugins.forEach(plugin => {
  if (plugin.constructor.name === 'CompressionPlugin') plugin.options.cache = false
})
module.exports = config
