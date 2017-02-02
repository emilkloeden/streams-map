# Streams Map

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