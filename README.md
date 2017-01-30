# proxy-generics-google-maps

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Proxy Generic Geolocation Provider for google-maps.

## Install

```sh
$ npm install --save proxy-generics-google-maps
```

## Configure

```js
// config/proxyGenerics.js
module.exports = {
  // make the key googleMaps, alternatively make the key geolocation_provider to be the default geolocation provider 
  googleMaps: {
      adapter: require('proxy-generic-google-maps'),
      options: {
          key: '<your api key>'
      }
  }
}
```

[npm-image]: https://img.shields.io/npm/v/proxy-generics-google-maps.svg?style=flat-square
[npm-url]: https://npmjs.org/package/proxy-generics-google-maps
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/proxy-generics-google-maps/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/proxy-generics-google-maps/tree/master
[daviddm-image]: http://img.shields.io/david//trailpack-proxy-generics-google-maps.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/proxy-generics-google-maps
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/proxy-generics-google-maps.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/proxy-generics-google-maps

