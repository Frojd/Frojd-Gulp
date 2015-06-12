"use strict";

var browserify = require("browserify");
var buffer = require("vinyl-buffer");
var gulp = require("gulp");
var path = require("path");
var source = require("vinyl-source-stream");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");

var config = require("../config");
var handleErrors = require("../util/handleErrors");

gulp.task("browserify", function() {

    var bundle = browserify(
        path.join(config.root, "js", "main.js"),
        { debug: true }
    )
    .bundle()
    .on("error", handleErrors.warning);

    bundle.pipe(source("main.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write("../maps"))
        .pipe(gulp.dest(path.join(config.buildPath(), "js")));

    bundle.pipe(source("main-min.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(path.join(config.buildPath(), "js")));
});
