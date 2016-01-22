'use strict';

var ng = require('angular');

module.exports = ng.module('main', [])
  .directive('appMain', require('./main.directive'))
  .name;
