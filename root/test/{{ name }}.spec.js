'use strict';

var expect = require('expect.js');

describe('{{ name }}', function () {
  var {{ name }} = require('../src/component/{{ name }}/{{ name }}');

  it('should return something', function () {
    expect({{ name }}).not.to.be(undefined);
  });
});
