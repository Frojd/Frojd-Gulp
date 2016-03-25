/**
 * Contains utlility functions for generating checksums.
 */

"use strict";

var fs = require("fs");
var crypto = require("crypto");

/**
 * Generate checksum of file
 * Usage:
 *  checksum.checksumFile('myfile/test.js', function(err, hash) {
 *      console.log('checksum value is:', hash);
 *  }};
 */
function checksum(file, callback) {
    var hash = crypto.createHash("md5")
    var fileStream = fs.createReadStream(file);

    hash.setEncoding('hex');
    fileStream.pipe(hash, {
        end: false
    });

    fileStream.on('end', function (err) {
        if (err) {
            return callback(err);
        }

        hash.end();
        callback(null, hash.read())
    });
}

module.exports = {
    checksum: checksum
};
