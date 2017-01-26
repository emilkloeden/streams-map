const {Transform} = require('stream')

function map(fn) {
    const myTransform = new Transform({
        transform(chunk, encoding, callback) {
            chunk = chunk.toString()
            chunk = fn(chunk)
            this.push(chunk)
            callback()
        },
        flush(callback) {
            callback()
        }
    })

    return myTransform
}

module.exports = map