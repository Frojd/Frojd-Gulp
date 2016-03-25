/**
 * Compile less to css files, a drop in replacement for sass
 * Requires the package gulp-less.
 */
'use strict';

var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var path = require('path');
var rename = require('gulp-rename');
var less = require("gulp-less");
var sourcemaps = require('gulp-sourcemaps');

var logging = require("../util/logging");

gulp.task('css', ['less']);

gulp.task('less', function() {
    var config = require('../').config;
    return gulp.src(path.join(config.root, 'less', 'index.less'))
        .pipe(sourcemaps.init())
        .pipe(less())
        .on("error", logging.warning)
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(path.join(config.buildPath, 'css')))
        .pipe(minifyCss())
        .pipe(rename('index-min.css'))
        .pipe(gulp.dest(path.join(config.buildPath, 'css')));
});
