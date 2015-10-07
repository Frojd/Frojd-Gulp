"use strict";

var autoprefixer = require("gulp-autoprefixer");
var gulp = require("gulp");
var minifyCss = require("gulp-minify-css");
var path = require("path");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");

var handleErrors = require("../util/handleErrors");
var config = require("../config");

gulp.task("css", ["sass", "ie"]);

gulp.task("sass", function() {
    return gulp.src(path.join(config.root, "scss", "main.scss"))
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("../maps"))
    .pipe(gulp.dest(path.join(config.buildPath(), "css")))
    .pipe(minifyCss())
    .pipe(rename("main-min.css"))
    .pipe(gulp.dest(path.join(config.buildPath(), "css")));
});

gulp.task("ie", function() {
    return gulp.src(path.join(config.root, "scss", "ie.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(path.join(config.buildPath(), "css")));
});
