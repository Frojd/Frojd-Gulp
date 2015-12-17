'use strict';

var gulp = require('gulp');
var path = require('path');

var config = require('../config');
var handleErrors = require('../util/handleErrors');

gulp.task('copy', function () {
    for (var i = 0; i < config.foldersToCopy.length; i++) {
        gulp.src(path.join(config.root, config.foldersToCopy[i], '**'))
        .on('error', handleErrors.warning)
        .pipe(gulp.dest(path.join(config.buildPath(), config.foldersToCopy[i])));
    }
});
