'use strict'
/* global describe, it */
const assert = require('assert')
describe('Geolocation Generic Google maps', () => {
  let GeolocationGenericService
  let GoogleMaps
  before((done) => {
    GeolocationGenericService = global.app.services.GeolocationGenericService
    GoogleMaps = global.app.config.proxyGenerics.googleMaps
    done()
  })

  it('should exist', () => {
    assert(GeolocationGenericService)
    assert(GoogleMaps)
  })

  it('should locate an Address', (done) => {
    GeolocationGenericService.locate({
      address_1: '7875 N. Alton Ave.',
      city: 'Indianapolis',
      province_code: 'IN',
      postal_code: '46268',
      country_code: 'US'
    }, GoogleMaps)
      .then(response => {
        assert.equal(response.formatted_address, '7875 N Alton Ave, Indianapolis, IN 46268, USA')
        assert.equal(response.latitude, '39.8960269')
        assert.equal(response.longitude, '-86.21793199999999')
        assert.ok(response.google_maps)
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
