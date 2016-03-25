'use strict';

var fs = require('fs');
var assert = require('assert');

var checksum = require('./utils/checksum');


describe('Assert file content', function() {
    var projectRoot = './test/frontend-project';

    describe('Make sure checksum matches', function () {
        it('Validates dist/js/index.js checksum', function (done) {
            checksum.checksum(projectRoot+'/dist/js/index.js', function(err, value) {
                assert.equal(value, 'e5fafa91bbeec2b68085b9b52b09f3fa');
                done();
            });
        });

        it('Validates dist/js/index-min.js checksum', function (done) {
            checksum.checksum(projectRoot+'/dist/js/index-min.js', function(err, value) {
                assert.equal(value, 'e7bb01cfc5464ca8a5602885507c0a71');
                done();
            });
        });

        it('Validates dist/css/index.css checksum', function (done) {
            checksum.checksum(projectRoot+'/dist/css/index.css', function(err, value) {
                assert.equal(value, 'a1e260a1ff0bc87e80e82db84b8f502c');
                done();
            });
        });

        it('Validates dist/css/index-min.css checksum', function (done) {
            checksum.checksum(projectRoot+'/dist/css/index-min.css', function(err, value) {
                assert.equal(value, '747b7d7b44edf9d2bc3d80d9c4d3e10c');
                done();
            });
        });
    });
});
