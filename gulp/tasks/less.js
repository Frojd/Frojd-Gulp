var gulp         = require('gulp');
var less         = require('gulp-less');
var minifyCSS    = require('gulp-minify-css');
var cmq          = require('gulp-combine-media-queries');
var path         = require('path');
var rename       = require('gulp-rename');
var handleErrors = require('../util/handleErrors');
var config       = require('../config');

gulp.task('less', ['lessDev', 'lessProd', 'lessIe']);

gulp.task('lessDev', function () {
    gulp.src(path.join(config.root, 'less', 'main.less'))
        .pipe(less({
            sourceMap: true,
            sourceMapRootpath: '../../less',
            sourceMapBasepath: path.join(config.root, 'less')
        }))
        .on('error', handleErrors.warning)
        .pipe(gulp.dest(path.join(config.root, 'builds', 'css'))
    );
});

gulp.task('lessProd', function () {
    gulp.src(path.join(config.root, 'less', 'main.less'))
        .pipe(less())
        .on('error', handleErrors.warning)
        .pipe(cmq({
          log: true
        }))
        .pipe(minifyCSS())
        .pipe(rename('main-min.css'))
        .pipe(gulp.dest(path.join(config.root, 'builds', 'css'))
    );
});

gulp.task('lessIe', function () {
    gulp.src(path.join(config.root, 'less', 'ie.less'))
        .pipe(less())
        .on('error', handleErrors.warning)
        .pipe(gulp.dest(path.join(config.root, 'builds', 'css'))
    );
});
