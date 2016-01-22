'use strict';

var ng = require('angular');

var home = ng.module('home', []);

module.exports = home
  .directive('appHome', require('./home.directive'))
  .name;
