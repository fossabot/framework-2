'use strict';

const {
  ServiceProvider
} = require('adonis-fold');

const path = require('path');

class AppProvider extends ServiceProvider {

  registerState() {
    this.app.singleton('Lesswork/State', function (app) {
      const State = require('../src/State');

      return new State();
    });

    return this;
  }

  registerApp() {
    this.app.singleton('Lesswork/App', function (app) {
      const App = require('../src/App');

      return new App();
    });

    return this;
  }

  registerConfig() {
    this.app.singleton('Lesswork/Config', function (app) {
      const Config = require('../src/Config');

      return new Config(app.use('Helpers').configPath());
    });
    this.app.alias('Adonis/Src/Config', 'Lesswork/Config');

    return this;
  }

  registerRoute() {
    this.app.singleton('Lesswork/Route', function (app) {
      return require('../src/Route');
    });

    return this;
  }

  registerCommand() {
    this.app.bind('Lesswork/Command', function (app) {
      const work = require('lesswork-cmd');

      return work.Command;
    });
    this.app.alias('Adonis/Src/Command', 'Lesswork/Command');

    return this;
  }

  registerEnv() {
    this.app.singleton('Lesswork/Env', function (app) {
      const Env = require('../src/Env');

      return new Env(app.use('Helpers').appRoot());
    });
    this.app.alias('Adonis/Src/Env', 'Lesswork/Env');

    require('lesswork-framework/lib/env');

    return this;
  }

  registerException() {
    this.app.bind('Lesswork/Exception', function (app) {
      const Exception = require('../src/Exception');

      return Exception;
    });
    this.app.alias('Adonis/Src/Exception', 'Lesswork/Exception');

    return this;
  }

  * register() {
    this.registerState()
      .registerApp()
      .registerConfig()
      .registerCommand()
      .registerEnv()
      .registerException()
      .registerRoute();
  }
}

module.exports = AppProvider;