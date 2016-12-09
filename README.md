## keyson

[![npm](https://img.shields.io/npm/v/keyson.svg?style=flat-square)](https://www.npmjs.com/package/keyson) [![Travis](https://img.shields.io/travis/b37t1td/keyson.svg?style=flat-square)](https://travis-ci.org/b37t1td/keyson/) [![Coveralls](https://img.shields.io/coveralls/b37t1td/keyson.svg?style=flat-square)](https://coveralls.io/github/b37t1td/keyson) [![David](https://img.shields.io/david/b37t1td/keyson.svg?style=flat-square)]()

Access nested json objects using simple string based paths.

### Installation

```
npm install keyson
```

### Usage

`keyson(object, key [,separator]`

```js
  var obj = {
    name : 'test',
    test : [
      'hello',
      'world',
      { nested : [1, 2, 3] }
    ]
  };


  keyson(obj, 'name'); // test
  keyson(obj, 'test.0'); //hello
  keyson(obj, 'test.nested.2'); // 3
```

### License

MIT (c) Svetlana Linuxenko
