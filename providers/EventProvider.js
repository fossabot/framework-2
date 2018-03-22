'use strict';

const {
  ServiceProvider
} = require('adonis-fold');

class EventProvider extends ServiceProvider {
  /**
   * Register method called by the Ioc container
   * to register the provider
   *
   * @method register
   *
   * @return {void}
   */
  * register() {
    this.app.singleton('Lesswork/Event', function (app) {
      const Event = require('../Event');

      return new Event(use('Config'), use('Helpers'));
    });
  }
}

module.exports = EventProvider;