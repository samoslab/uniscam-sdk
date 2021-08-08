
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./uniscam-sdk.cjs.production.min.js')
} else {
  module.exports = require('./uniscam-sdk.cjs.development.js')
}
