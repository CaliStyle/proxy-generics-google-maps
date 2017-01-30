/* eslint no-console: [0] */
'use strict'
const googleMaps = require('@google/maps')
module.exports = class ProxyGenericsGoogleMaps {
  constructor(options) {
    this.options = options
  }

  /**
   * Create GoogleMaps Instance
   * @returns {*} GoogleMaps Instance
   */
  googleMaps() {
    return googleMaps.createClient({
      key: this.options.key
    })
  }
}

