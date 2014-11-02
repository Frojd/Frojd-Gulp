"use strict";

var gulp = require("gulp"),
    jshint = require("gulp-jshint"),
    path = require("path"),
    handleErrors = require("../util/handleErrors"),
    config = require("../config"),
    sources = [ path.join(config.root, "js", "**", "*.js") ];

for (var i = 0; i < config.excludedJsFolders.length; i++) {
    sources.push(
        "!" + config.root + "/js/" + config.excludedJsFolders[i] + "{,/**}"
    );
}

gulp.task("jshint", function() {
    gulp.src(sources)
        .pipe(jshint())
        .pipe(jshint.reporter("jshint-stylish"))
        .pipe(jshint.reporter("fail"))
        .on("error", handleErrors.warning);
});
