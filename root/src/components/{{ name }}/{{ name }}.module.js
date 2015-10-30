'use strict';

var ng = require('angular');

module.exports = ng.module('{{ name }}', []) 
  .directive('{{ name }}', require('./{{ name }}.directive'))
  .name;
