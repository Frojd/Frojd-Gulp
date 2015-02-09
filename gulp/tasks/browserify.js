"use strict";

var gulp = require("gulp");
var browserify = require("browserify");
var uglify = require("gulp-uglify");
var source = require("vinyl-source-stream");
var streamify = require("gulp-streamify");
var path = require("path");
var mold = require("mold-source-map");
var map = require("map-stream");
var handleErrors = require("../util/handleErrors");
var config = require("../config");

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
