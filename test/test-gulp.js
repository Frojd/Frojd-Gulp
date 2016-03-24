var assert = require('assert');
var fs = require('fs');

describe('Assert gulp build works', function() {
    describe('Locate generated files', function () {
        it('dist directory should exist', function (done) {
            fs.stat('./test/test-frontend/dist', function(err, stats) {
                assert.equal(err, null);
                done();
            });
        });

        it('dist/index.js should exist', function (done) {
            fs.stat('./test/test-frontend/dist/js/index.js', function(err, stats) {
                assert.equal(err, null);
                done();
            });
        });

        it('dist/index-min.js should exist', function (done) {
            fs.stat('./test/test-frontend/dist/js/index-min.js', function(err, stats) {
                assert.equal(err, null);
                done();
            });
        });

        it('dist/index.css exist', function (done) {
            fs.stat('./test/test-frontend/dist/css/index.css', function(err, stats) {
                assert.equal(err, null);
                done();
            });
        });

        it('dist/index-min.css exist', function (done) {
            fs.stat('./test/test-frontend/dist/css/index-min.css', function(err, stats) {
                assert.equal(err, null);
                done();
            });
        });

        it('dist/fonts/helvetica.txt should exist', function (done) {
            fs.stat('./test/test-frontend/dist/fonts/helvetica.txt', function(err, stats) {
                assert.equal(err, null);
                done();
            });
        });
    });
});

