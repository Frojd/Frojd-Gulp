var assert = require('assert');
var fs = require('fs');

describe('Assert gulp build works', function() {
    describe('Locate generated files', function () {
        it('dist directory should exist', function () {
            fs.stat('./test/test-frontend/dist', function(err, stats) {
                assert.equal(err, null);
            });
        });

        it('dist/index.js should exist', function () {
            fs.stat('./test/test-frontend/js/dist/index.js', function(err, stats) {
                assert.equal(err, null);
            });
        });

        it('dist/index-min.js should exist', function () {
            fs.stat('./test/test-frontend/js/dist/index-min.js', function(err, stats) {
                assert.equal(err, null);
            });
        });

        it('dist/index.css exist', function () {
            fs.stat('./test/test-frontend/js/dist/index.css', function(err, stats) {
                assert.equal(err, null);
            });
        });

        it('dist/index-min.css exist', function () {
            fs.stat('./test/test-frontend/js/dist/index-min.css', function(err, stats) {
                assert.equal(err, null);
            });
        });
    });
});

