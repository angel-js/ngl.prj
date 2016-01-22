var each = require('lodash/each');

module.exports = function ($locationProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $stateProvider, ROUTES) {
  'use strict';

  $locationProvider.html5Mode(true);
  $urlMatcherFactoryProvider.strictMode(false);

  each(ROUTES, function (route, name, routes) {
    if (name === 'default') {
      $urlRouterProvider.otherwise(routes[route].url);
      return;
    }

    $stateProvider.state(name, route);
  });
};
