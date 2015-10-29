'use strict';

var ng = require('angular');

ng.module('{{ name }}', []) 

.directive('{{ name }}', function () {
  var link = function () {};

  return {
    link: link
  };
});

module.exports = '{{ name }}';
