"use strict";

var gulp = require("gulp"),
    jshint = require("gulp-jshint"),
    path = require("path"),
    handleErrors = require("../util/handleErrors"),
    config = require("../config");

gulp.task("copyJsFolders", function () {
    for (var i = 0; i < config.excludedJsFolders.length; i++) {
        gulp.src(path.join(config.root, "js", config.excludedJsFolders[i], "**", "*.js"))
            .on("error", handleErrors.warning)
            .pipe(gulp.dest(path.join(config.buildPath(), "js", config.excludedJsFolders[i])));

    }
});
