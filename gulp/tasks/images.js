"use strict";

var changed = require("gulp-changed");
var gulp = require("gulp");
var path = require("path");

var config = require("../config");

try {
    var imagemin = require("gulp-imagemin");
} catch (er) {
    imagemin = null;
}

gulp.task("images", function() {
    if (imagemin) {
        gulp.src(path.join(config.root, "img", "**"))
        .pipe(changed(path.join(config.buildPath(), "img")))
        .pipe(imagemin())
        .pipe(gulp.dest(path.join(config.buildPath(), "img")));
    }
});
