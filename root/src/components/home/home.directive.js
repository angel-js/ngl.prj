'use strict';

module.exports = function () {
  var link = function (scope) {
    scope.name = 'Home';
  };

  return {
    templateUrl: 'home/home.html',
    link: link
  };
};
