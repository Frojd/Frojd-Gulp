'use strict';

var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var path = require('path');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var config = require('../config');
var getSources = require('../util/getSources');
var handleErrors = require('../util/handleErrors');
var sources = [path.join(config.root, 'js', '**', '*.js')];

gulp.task('js', ['uglify']);

gulp.task('eslint', function() {
    return gulp.src(sources.concat(getSources(config.excludedFolders, true)))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('browserify', ['eslint'], function() {

    var b = browserify({
        entries: path.join(config.root, 'js', 'index.js'),
        debug: true
    });

    return b.bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .on('error', handleErrors.warning)
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(path.join(config.buildPath(), 'js')));
});

gulp.task('uglify', ['browserify'], function() {
    return gulp.src(path.join(config.buildPath(), 'js', 'index.js'))
    .pipe(uglify())
    .pipe(rename('index-min.js'))
    .pipe(gulp.dest(path.join(config.buildPath(), 'js')));
});
