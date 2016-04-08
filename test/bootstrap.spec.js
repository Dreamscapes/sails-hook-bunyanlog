/**
 * sails-hook-bunyanlog
 *
 * @author     Robert Rossmann <rr.rossmann@me.com>
 * @copyright  2016 Robert Rossmann
 * @license    http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

const sails = require('sails')

before(function(done) {
  // Allow more time to load Sails
  // eslint-disable-next-line no-invalid-this
  this.timeout(10000)

  const config = {
    hooks: {
      // Disable most of the core hooks as they play no role in the tests
      blueprints: false,
      controllers: false,
      cors: false,
      csrf: false,
      grunt: false,
      http: false,
      i18n: false,
      policies: false,
      pubsub: false,
      request: false,
      responses: false,
      services: false,
      session: false,
      sockets: false,
      views: false,
      orm: false
    },
    log: {
      level: 'warn'
    },
    globals: {
      _: false,
      async: false,
      models: false
    }
  }

  sails.load(config, done)
})

after(done => sails.lower(done))
