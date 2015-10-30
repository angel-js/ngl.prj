'use strict';

var expect = require('expect.js');

describe('{{ name }} directive', function () {
  var {{ name }} = null;

  beforeEach(function () {
    var directive = require('../src/components/{{ name }}/{{ name }}.directive');
    {{ name }} = directive();
  });


  it('should return a directive definition object', function () {
    expect({{ name }}).to.be.an('object');
  });
});
