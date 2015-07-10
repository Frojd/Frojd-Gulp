"use strict";

var gulp = require("gulp");
var jshint = require("gulp-jshint");
var path = require("path");

var config = require("../config");
var getSource = require("../util/getSource");
var handleErrors = require("../util/handleErrors");
var source = getSource(
    path.join(config.root, "js"),
    [ path.join(config.root, "js", "**", "*.js") ],
    config.excludedFolders, 
    true
);

gulp.task("jshint", function() {
    gulp.src(source)
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"))
    .pipe(jshint.reporter("fail"))
    .on("error", handleErrors.warning);
});
