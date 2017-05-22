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

  addressToString(address) {
    let street = ''
    let city = ''
    let postalCode = ''
    let province = ''
    let country = ''

    if (address.address_1) {
      street = address.address_1
    }

    if (address.address_2) {
      street = `${street} ${address.address_2}`
    }

    if (address.address_3) {
      street = `${street} ${address.address_3}`
    }

    if (address.company) {
      street = `${street} ${address.company}`
    }

    if (street !== '') {
      street = `${street}, `
    }

    if (address.city) {
      city = address.city
    }

    if (city !== '') {
      city = `${city} `
    }

    if (address.postal_code) {
      postalCode = address.postal_code
    }

    if (postalCode !== '') {
      postalCode = `${postalCode} `
    }

    if (address.province_code || address.province) {
      if (address.province_code) {
        province = `${address.province_code}`
      }
      else {
        province = `${address.province}`
      }
    }

    if (address.country_code || address.country) {
      if (address.country_code) {
        country = `${address.country_code}`
      }
      else {
        country = `${address.country}`
      }
    }

    if (province !== '' && country !== '') {
      province = `${province}, `
      country = `${country}`
    }

    return `${street}${city}${province}${postalCode}${country}`
  }

  locate(address) {
    return new Promise((resolve, reject) => {
      const formattedAddress = this.addressToString(address)
      this.googleMaps().geocode({
        address: formattedAddress
      }, function(err, response) {
        if (err) {
          return reject(err)
        }
        const proxySchema = address
        if (response.json && response.json.results.length > 0) {
          // Formatted Address
          proxySchema.formatted_address = response.json.results[0].formatted_address || formattedAddress
          if (response.json.results[0].geometry && response.json.results[0].geometry.location) {
            proxySchema.latitude = response.json.results[0].geometry.location.lat
            proxySchema.longitude = response.json.results[0].geometry.location.lng
          }
          proxySchema.google_maps = response.json.results
        }
        else {
          proxySchema.formatted_address = formattedAddress
          proxySchema.latitude = 0
          proxySchema.longitude = 0
        }
        return resolve(proxySchema)
      })
    })
  }
}

