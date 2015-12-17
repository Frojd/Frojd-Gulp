'use strict';

var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var path = require('path');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var config = require('../config');

gulp.task('css', ['sass']);

gulp.task('sass', function() {
    return gulp.src(path.join(config.root, 'scss', 'index.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(path.join(config.buildPath(), 'css')))
    .pipe(minifyCss())
    .pipe(rename('index-min.css'))
    .pipe(gulp.dest(path.join(config.buildPath(), 'css')));
});
