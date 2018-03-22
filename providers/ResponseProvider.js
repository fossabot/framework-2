'use strict'

const {
  ServiceProvider
} = require('adonis-fold');

class ResponseProvider extends ServiceProvider {
  /**
   * Register method called by the Ioc container
   * to register the provider
   *
   * @method register
   *
   * @return {void}
   */
  * register() {
    this.app.singleton('Lesswork/Response', function (app) {
      const Response = require('../lib/response');

      return new Response();
    })
  }
}

module.exports = ResponseProvider;