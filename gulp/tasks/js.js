"use strict";

var browserify = require("browserify");
var buffer = require("vinyl-buffer");
var gulp = require("gulp");
var jshint = require("gulp-jshint");
var path = require("path");
var rename = require("gulp-rename");
var source = require("vinyl-source-stream");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");

var config = require("../config");
var getSources = require("../util/getSources");
var handleErrors = require("../util/handleErrors");
var sources = [path.join(config.root, "js", "**", "*.js")];

gulp.task("js", ["jshint", "browserify", "uglify"]);

gulp.task("jshint", function() {
    return gulp.src(sources.concat(getSources(config.excludedFolders, true)))
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"))
    .pipe(jshint.reporter("fail"))
    .on("error", handleErrors.warning);
});

gulp.task("browserify", ["jshint"], function() {

    var b = browserify({
        entries: path.join(config.root, "js", "main.js"),
        debug: true
    });

    return b.bundle()
    .pipe(source("main.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .on("error", handleErrors.warning)
    .pipe(sourcemaps.write("../maps"))
    .pipe(gulp.dest(path.join(config.buildPath(), "js")));
});

gulp.task("uglify", ["browserify"], function() {
    return gulp.src(path.join(config.buildPath(), "js", "main.js"))
    .pipe(uglify())
    .pipe(rename("main-min.js"))
    .pipe(gulp.dest(path.join(config.buildPath(), "js")));
});
