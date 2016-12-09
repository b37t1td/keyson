### keyson
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
