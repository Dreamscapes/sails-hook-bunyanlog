/**
 * sails-hook-bunyanlog
 *
 * @author     Robert Rossmann <rr.rossmann@me.com>
 * @copyright  2016 Robert Rossmann
 * @license    http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {

  extends: [
    '@strv/javascript/environments/nodejs/v5',
    '@strv/javascript/environments/nodejs/best-practices',
    '@strv/javascript/environments/nodejs/optional',
    '@strv/javascript/coding-styles/base'
  ],

  rules: {
    // If your editor cannot find and show these to you, occasionally turn this off
    'no-warning-comments': 0
  }
}
