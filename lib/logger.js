/**
 * sails-hook-bunyanlog
 *
 * @author     Robert Rossmann <rr.rossmann@me.com>
 * @copyright  2016 Robert Rossmann
 * @license    http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

const bunyan = require('bunyan')
const path = require('path')

/**
 * The Bunyan logger
 *
 * This hook is configured to replace the built-in sails.log object so that all logging passes
 * through Bunyan. Custom streams may be added via extra configuration
 *
 * @param  {Object}   app   The Sails.js app
 * @return {Object}         The Bunyan hook module definition
 */
module.exports = function bunyanlog(app) {
  return {

    /**
     * Provide default configuration options for this hook
     *
     * @param   {Object}    conf    Sails.js configurations object
     * @return  {Object}            Configuration object to be used as defaults
     */
    defaults(conf) {
      // This require is only called at startup
      // eslint-disable-next-line global-require
      const pkg = require(path.join(conf.appPath, 'package'))

      return {
        log: {
          name: pkg.name || 'sails',
          level: 'debug',
          serializers: bunyan.stdSerializers
        }
      }
    },

    /**
     * Initialise the bunyan hook
     *
     * @param   {Function}    done    Standard callback
     * @return  {void}
     */
    initialize(done) {
      // Override the built-in logger
      app.log = bunyan.createLogger(app.config.log)
      // Force the ship printing off, it crashes the app because sails.log() is not a function
      app.config.log.noShip = true
      // ...and export the original bunyan, just in case someone needs it
      app.hooks.logger.bunyan = bunyan

      return done()
    }
  }
}


// The following extensions are made in order to support log levels used internally by Sails.js and
// also to make it easier for devs to use this logger as a drop-in replacement for the built-in
// logger. We also extend the prototype itself so that calling sails.log.child() will still include
// these methods.

/**
 * Monkey-patch for Sails' verbose log level
 *
 * @return {void}
 */
bunyan.prototype.verbose = bunyan.prototype.debug

/**
 * Monkey-patch for Sails' silly log level
 *
 * @return {void}
 */
bunyan.prototype.silly = bunyan.prototype.trace

/**
 * Monkey-patch for Sails' crit log level
 *
 * This level appears to be undocumented, but the function is defined on the original logger.
 *
 * @return {void}
 */
bunyan.prototype.crit = bunyan.prototype.fatal

/**
 * Noop monkey-patch for Sails' way of printing an empty line to console
 *
 * @return {void}
 */
bunyan.prototype.blank = function noop() {}
