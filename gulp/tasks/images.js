"use strict";

var gulp = require("gulp");
var changed = require("gulp-changed");
var imagemin = require("gulp-imagemin");
var path = require("path");
var config = require("../config");

gulp.task("images", function() {
	gulp.src(path.join(config.root, "img", "**"))
		.pipe(changed(path.join(config.buildPath(), "img")))
		.pipe(imagemin())
		.pipe(gulp.dest(path.join(config.buildPath(), "img")));
});
