const fs = require('fs')
const map = require('../src/index')
const StreamTest = require('streamtest')
const {expect} = require('chai')
const {join} = require('path')

function upper(str) { 
    return str.toUpperCase() 
}

StreamTest.versions.forEach(version => {
    describe('streams-map', function() {
        it(`should map a function over a stream using streams ${version}`, function(done) {

        const readStream = fs.createReadStream(join(__dirname, 'test-file.txt'))
        
        readStream
            .pipe(map(upper))
            .pipe(StreamTest[version].toText(function(err, text) {
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
})