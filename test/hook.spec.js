/**
 * sails-hook-bunyanlog
 *
 * @author     Robert Rossmann <rr.rossmann@me.com>
 * @copyright  2016 Robert Rossmann
 * @license    http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

const initialiser = require('..')
const expect = require('chai').expect

describe('Initialiser', function() {
  it('should be a function', function() {
    expect(initialiser).to.be.a('function')
  })

  it('should export an object', function() {
    expect(initialiser()).to.be.an('object')
  })


  describe('Hook spec', function() {
    let hook

    before(() => {
      hook = initialiser()
    })

    it('should have .initialize() function', function() {
      expect(hook).to.have.property('initialize').and.be.a('function')
    })

    it('should have .defaults() function', function() {
      expect(hook).to.have.property('defaults').and.be.a('function')
    })
  })
})
