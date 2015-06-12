"use strict";

var gutil = require("gulp-util");
var path = require("path");

var config = require("../config");

module.exports = function(origin, source, folders, exclude) {
    exclude = typeof exclude !== "undefined" ? exclude : false;

    if (exclude) {
        origin = "!" + origin;
    }

    for (var i = 0; i < folders.length; i++) {
        source.push(
            path.join(origin, folders[i], "{,/**}")
        );
    }

    return source;
};
