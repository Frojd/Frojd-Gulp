"use strict";

var gulp = require("gulp");
var path = require("path");

var config = require("../config");

try {
    var browserSync = require("browser-sync").create();
} catch (er) {
    browserSync = null;
}

gulp.task("browserSync", function() {
    if (browserSync) {
        browserSync.init([path.join(config.buildPath(), "**")], {
            proxy: config.proxy,
            open: false
        });
    }
});
