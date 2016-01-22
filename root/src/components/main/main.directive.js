'use strict';

module.exports = function () {
  var link = function (scope) {
    scope.name = '{{ name }}';
  };

  return {
    templateUrl: 'main/main.html',
    link: link
  };
};
