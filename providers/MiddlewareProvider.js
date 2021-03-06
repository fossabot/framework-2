'use strict';

/**
 * adonis-framework
 * Copyright(c) 2015-2016 Harminder Virk
 * MIT Licensed
 */

const ServiceProvider = require('adonis-fold').ServiceProvider;

class MiddlewareProvider extends ServiceProvider {

  * register() {
    this.app.bind('Lesswork/Src/Middleware', function () {
      return require('../src/Middleware');
    });

    this.app.alias('Adonis/Src/Middleware', 'Lesswork/Src/Middleware');
  }
}

module.exports = MiddlewareProvider;