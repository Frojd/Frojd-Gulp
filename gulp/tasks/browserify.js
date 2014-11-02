"use strict";

var gulp = require("gulp"),
    browserify = require("browserify"),
    uglify = require("gulp-uglify"),
    source = require("vinyl-source-stream"),
    streamify = require("gulp-streamify"),
    path = require("path"),
    mold = require("mold-source-map"),
    map = require("map-stream"),
    handleErrors = require("../util/handleErrors"),
    config = require("../config");

gulp.task("browserify", function() {
    var bundle = browserify(
            path.join(config.root, "js", "main.js"),
            { debug: true }
        )
        .bundle()
        .on("error", handleErrors.warning)
        .pipe(mold.transformSourcesRelativeTo(path.join(config.root, "js")));

    bundle.pipe(source("main.js"))
        .pipe(gulp.dest(path.join(config.buildPath(), "js")));

    bundle.pipe(source("main-min.js"))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(path.join(config.buildPath(), "js")));
});
