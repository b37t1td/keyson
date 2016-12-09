var expect = require('chai').expect;
var keyson = require('../');

describe('Test a bit complex objects', function() {
  it('should access flat data', function() {
    var obj = [1];

    expect(keyson(obj,'0')).to.be.equal(1);
  });

  it('should access flat nesting', function() {
    var obj = [
      0,
      { hello : [ 1, 3, { name : 'world' } ] }
    ];

    expect(keyson(obj, '1.hello.0')).to.be.equal(1);
    expect(keyson(obj, '1.hello.2.name')).to.be.equal('world');
    expect(keyson(obj, '1.hello.2.namerr')).to.be.an('undefined');
  });

  it('should access flats over the flat data', function() {
    var obj = [1, [0, [3],[5,6,7]]];

    expect(keyson(obj, '0')).to.be.equal(1);
    expect(keyson(obj, '1.0')).to.be.equal(0);
    expect(keyson(obj, '1.1.0')).to.be.equal(3);
    expect(keyson(obj, '1.2.0')).to.be.equal(5);
    expect(keyson(obj, '1.2.2')).to.be.equal(7);
    expect(keyson(obj, '1.2.3')).to.be.an('undefined');
  });

  it('should access objects itself', function() {
    var obj = [
      0,
      { hello : [ 1, 3, { name : 'world' } ] }
    ];

    expect(keyson(obj, '1')).to.be.an('object');
    expect(keyson(obj, '1.hello')).to.be.an('array');
    expect(keyson(obj, '1.hello.0')).to.be.a('number');
  });


});
