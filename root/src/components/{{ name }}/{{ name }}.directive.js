'use strict';

module.exports = function () {
  var link = function (scope) {
    scope.name = '{{ name }}';
  };

  return {
    template: '<h1 ng-bind="name"></h1>',
    link: link
  };
};
