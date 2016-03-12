'use strict';

var gulp = require('gulp');
var path = require('path');

var config = require('../config');
var handleErrors = require('../util/handleErrors');

gulp.task('copy', function () {
    var folders = config.foldersToCopy;
    folders.forEach(function(folder) {
        var from = folder;
        var destination = from;

        if (typeof from === 'object') {
            var key = Object.keys(folder)[0];

            from = key;
            destination = folder[key];
        }

        gulp.src(path.join(config.root, from, '**'))
            .on('error', handleErrors.warning)
            .pipe(gulp.dest(path.join(config.buildPath(), destination)));
    });
});
