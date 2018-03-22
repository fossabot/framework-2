'use strict';

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
const assert = mochaPlugin.chai.assert;

const Test = require('lesswork-framework/Test');

const wrapped = mochaPlugin.getWrapper('helloWorld', '/app/Http/Controllers/<%= name %>/<%= name %>', 'handle');

describe('<%= name %>', () => {
  before((done) => {
    done();
  });

  it('should return 200', () => {
    return wrapped.run({}).then((response) => {
      expect(response).to.not.be.empty;
      assert.equal(typeof response, 'object');
      assert.equal(response.statusCode, '200');
    });
  });
});