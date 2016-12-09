var expect = require('chai').expect;
var keyson = require('../');

describe('Test simple objects', function() {
  it('should get values for object keys', function() {
    var obj = {
      test : 1,
      tset : 2
    };

    expect(keyson(obj, 'test')).to.be.equal(1);
    expect(keyson(obj, 'tset')).to.be.equal(2);
  });

  it('should get value from nested object', function() {
    var obj = {
      name : 'test',
      test : {
        name : 'nested'
      }
    };

    expect(keyson(obj, 'test.name')).to.be.equal('nested');
  });

  it('should handle unresolved keys', function() {
    var obj = {
      name : 'test',
      test : {
        name : 'nested',
        children : {
          name : 'children'
        }
      }
    };

    expect(keyson(obj, 'test.hello')).to.be.an('undefined');
    expect(keyson(obj, 'test.children.name')).to.be.equal('children');
  });

  it('should handle nested arrays', function() {
    var obj = {
      name : 'test',
      test : [
        'hello',
        'world',
        { nested : [1, 2, 3] }
      ]
    };

    expect(keyson(obj, 'test.0')).to.be.equal('hello');
    expect(keyson(obj, 'test.1')).to.be.equal('world');
    expect(keyson(obj, 'test.3')).to.be.an('undefined');
    expect(keyson(obj, 'test.2.nested.0')).to.be.equal(1);
  });

  it('should handle unresolved array item', function() {
    var obj = {
      name : 'test',
      test : [
        'hello',
        'world',
        { nested : [1, 2, 3] }
      ]
    };

    expect(keyson(obj, 'test.kkk')).to.be.an('undefined');
    expect(keyson(obj, 'test.0.test')).to.be.an('undefined');
    expect(keyson(obj, 'test.2.nested.0')).to.be.equal(1);
    expect(keyson(obj, 'test.2.nested.0.hello')).to.be.an('undefined');
    expect(keyson(obj, 'test')).to.be.an('array');
  });

  it('should work with different separators', function() {
    var obj = {
      name : 'test',
      test : [
        'hello',
        'world',
        { nested : [1, 2, 3] }
      ]
    };

    expect(keyson(obj, 'test/0', '/')).to.be.equal('hello');
    expect(keyson(obj, 'test/1', '/')).to.be.equal('world');
    expect(keyson(obj, 'test/3', '/')).to.be.an('undefined');
    expect(keyson(obj, 'test/2/nested/0', '/')).to.be.equal(1);
  });
});