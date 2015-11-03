'use strict';

module.exports = function () {
  var link = function (scope) {
    scope.name = '{{ name }}';
  };

  return {
    templateUrl: '{{ name }}/{{ name }}.html',
    link: link
  };
};
