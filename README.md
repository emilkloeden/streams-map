# Streams Map
[![Travis](https://img.shields.io/travis/emilkloeden/streams-map.svg)](https://travis-ci.org/emilkloeden/streams-map) 
[![Codecov](https://img.shields.io/codecov/c/github/emilkloeden/streams-map.svg)](https://codecov.io/gh/emilkloeden/streams-map) 
[![npm](https://img.shields.io/npm/dt/streams-map.svg)](https://www.npmjs.com/package/streams-map) 
[![npm](https://img.shields.io/npm/v/streams-map.svg)](https://www.npmjs.com/package/streams-map) 
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Apply a function over a stream of text.

## Installation

```npm install --save streams-map```

## Usage
```js
const map = require('streams-map')

const myStream = getStreamSomehow() // hello world

myStream
    .pipe(map(chunk => chunk.toString().toUpperCase())
    .pipe(process.stdout)

// HELLO WORLD
```

## License
MIT

## Contributions
This is a micro library providing little value to what I expect will be a nano audience. If you find a bug and want to contribute, I will happily accept pull requests.