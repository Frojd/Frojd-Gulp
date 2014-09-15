"use strict";

var gulp = require("gulp"),
    browserify = require("browserify"),
    jshint = require("gulp-jshint"),
    uglify = require("gulp-uglify"),
    source = require("vinyl-source-stream"),
    streamify = require("gulp-streamify"),
    path = require("path"),
    mold = require("mold-source-map"),
    map = require("map-stream"),
    gutil = require("gulp-util"),
    handleErrors = require("../util/handleErrors"),
    config = require("../config"),
    errors = [];

gulp.task("browserify", [ "jshint" ], function() {

    if (errors.indexOf(false) === -1) {

        var bundle = browserify(
                path.join(config.root, "js", "main.js"),
                { debug: true }
            )
            .bundle()
            .on("error", handleErrors.warning)
            .pipe(mold.transformSourcesRelativeTo(path.join(config.root, "js")));

        bundle.pipe(source("main.js"))
            .pipe(gulp.dest(path.join(config.root, "builds", "js")));

        bundle.pipe(source("main-min.js"))
            .pipe(streamify(uglify()))
            .pipe(gulp.dest(path.join(config.root, "builds", "js")));
    }
});

gulp.task("jshint", function(callback) {
    // Reset errors
    errors = [];
    gulp.src([ path.join(config.root, "js", "**", "*.js"), "!" + config.root +
            "/js/libs{ ,/** }" ])
        .pipe(jshint())
        .pipe(jshint.reporter("jshint-stylish"))
        .pipe(map(function(file, callback) {
            errors.push(file.jshint.success);
            callback(null, file);
        }))
        .on("end", function() {
            if(errors.filter(function(success){return !success;}).length) {
                if (config.beep) {
                    gutil.beep();
                }
            }

            callback();
        });
});
