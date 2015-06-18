"use strict";

var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var less = require("gulp-less");
var minifyCss = require("gulp-minify-css");
var path = require("path");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");

var handleErrors = require("../util/handleErrors");
var config = require("../config");

gulp.task("less", [ "lessDev", "lessProd", "lessIe" ]);

gulp.task("lessDev", function() {
    gulp.src(path.join(config.root, "less", "main.less"))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    .on("error", handleErrors.warning)
    .pipe(sourcemaps.write("../maps"))
    .pipe(gulp.dest(path.join(config.buildPath(), "css")));
});

gulp.task("lessProd", function() {
    gulp.src(path.join(config.root, "less", "main.less"))
    .pipe(less())
    .pipe(autoprefixer())
    .on("error", handleErrors.warning)
    .pipe(minifyCss())
    .on("error", handleErrors.warning)
    .pipe(rename("main-min.css"))
    .pipe(gulp.dest(path.join(config.buildPath(), "css")));
});

gulp.task("lessIe", function() {
    gulp.src(path.join(config.root, "less", "ie.less"))
    .pipe(less())
    .on("error", handleErrors.warning)
    .pipe(gulp.dest(path.join(config.buildPath(), "css")));
});
