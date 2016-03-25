'use strict';

var path = require('path');
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('css', ['sass']);

gulp.task('sass', function() {
    var config = require('../').config;

    return gulp.src(path.join(config.root, 'scss', 'index.scss'))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(path.join(config.buildPath, 'css')))
        .pipe(minifyCss())
        .pipe(rename('index-min.css'))
        .pipe(gulp.dest(path.join(config.buildPath, 'css')));
});
