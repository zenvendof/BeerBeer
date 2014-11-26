/**
 * Created by Tommy on 26/11/2014.
 * Description: Ridiculous tests
 */

var should = require('should');
var assert = require('assert');
//var threeSeconds = require ('seconds');

describe('Test Framework', function () {
    it('should have mocha installed and running.', function () {
        assert.equal(true, true);
    })

    it('should have the should library installed and running for fluent testing.', function () {
        true.should.eql(true);
    })
})