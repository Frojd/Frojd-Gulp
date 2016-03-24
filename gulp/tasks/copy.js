'use strict';

var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var rename = require('gulp-rename');

var handleErrors = require('../util/handleErrors');

gulp.task('copy', function () {
    var config = require('../').config;
    var folders = config.copyFolders;

    folders.forEach(function(folder) {
        var from = folder;
        var destination = from;

        if (typeof from === 'object') {
            var key = Object.keys(folder)[0];

            from = key;
            destination = folder[key];
        }

        var fromPath = path.join(config.root, from);

        // Use copy method depending if it's a directory or file
        if (fs.lstatSync(fromPath).isDirectory()) {
            fromPath = path.join(fromPath, '**');
            gulp.src(path.join(fromPath))
                .on('error', handleErrors.warning)
                .pipe(gulp.dest(path.join(config.buildPath(), destination)));
        } else {
            gulp.src(fromPath)
                .on('error', handleErrors.warning)
                .pipe(rename(path.basename(destination)))
                .pipe(gulp.dest(path.join(
                    config.buildPath(), path.dirname(destination)
                )
            ));
        }
    });
});
