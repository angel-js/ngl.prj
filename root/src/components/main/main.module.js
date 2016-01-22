'use strict';

var ng = require('angular');

var main = ng.module('main', [
  require('../router/router.module')
]);

module.exports = main
  .directive('appMain', require('./main.directive'))
  .name;
