'use strict';

var ng = require('angular');

ng.module('app', [
  'templates',
  require('./components/{{ name }}/{{ name }}.module')
]);
