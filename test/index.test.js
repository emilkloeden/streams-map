const fs = require('fs')
const {expect} = require('chai')
const StreamTest = require('streamtest')
const map = require('./index')

function upper(str) { return str.toUpperCase() }

describe('streams-map', function() {
    it('should work with one passed as an argument', function(done) {
        const readStream = fs.createReadStream('./test-file.txt')
        readStream
            .pipe(map(upper))
            .pipe(StreamTest['v1'].toText(function(err, text) {
                if (err) {
                    done(err)
                }
                else {
                    expect(text).to.equal('HELLO WORLD')
                    done()
                }
            
        }))
    })
})