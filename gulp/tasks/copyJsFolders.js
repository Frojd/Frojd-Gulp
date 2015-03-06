"use strict";

var gulp = require("gulp");
var jshint = require("gulp-jshint");
var path = require("path");
var handleErrors = require("../util/handleErrors");
var config = require("../config");

gulp.task("copyJsFolders", function () {
    for (var i = 0; i < config.jsFoldersToCopy.length; i++) {
        gulp.src(path.join(config.root, "js", config.jsFoldersToCopy[i], "**", "*.js"))
            .on("error", handleErrors.warning)
            .pipe(gulp.dest(path.join(config.buildPath(), "js", config.jsFoldersToCopy[i])));

    }
});
