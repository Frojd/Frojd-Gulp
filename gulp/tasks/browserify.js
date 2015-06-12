"use strict";

var gulp = require("gulp");
var browserify = require("browserify");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var path = require("path");
var handleErrors = require("../util/handleErrors");
var config = require("../config");

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
