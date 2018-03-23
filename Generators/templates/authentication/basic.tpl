'use strict';

const app = require('../../../app');

const Basic = require('lesswork-framework/Authentication/Basic');

module.exports = {
  auth: function (event, context, callback) {
    app(arguments, function () {
      new Basic().auth('test', 'test');
    });
  },

  config: `Authentication<%= name %>Basic:
    handler: app/Http/Authentication/<%= name %>Basic.auth
    documentation:
      description: "Basic Auth Handler"`
};