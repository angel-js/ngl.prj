'use strict';

var expect = require('expect.js');

describe('main directive', function () {
  var main = null;

  beforeEach(function () {
    var directive = require('../src/components/main/main.directive');
    main = directive();
  });


  it('should return a directive definition object', function () {
    expect(main).to.be.an('object');
  });
});
