"use strict";

var gulp = require("gulp");
var iconFont = require("gulp-iconfont");
var consolidate = require("gulp-consolidate");
var rename = require("gulp-rename");
var path = require("path");
var config = require("../config");
var fontName = "icon";

gulp.task("icons", function(){
    gulp.src([ path.join(config.root, "icons", "*.svg") ])
    .pipe(iconFont({
        fontName: fontName,
        normalize: true,
        fontHeight: 1001,
        appendUnicode: true,
        formats: ["eot", "ttf", "svg", "woff"]
    }))
    .on("glyphs", function(glyphs, options) {
        gulp.src([ path.resolve(__dirname, "../templates/icons.mustache") ])
        .pipe(consolidate("mustache", {
            glyphs: glyphs.map(function(point) {
                return {
                    name: point.name,
                    codepoint: point.unicode[0].charCodeAt(0).toString(16).toUpperCase()
                };
            }),
            fontName: fontName,
            fontPath: "../fonts/",
            className: "icon"
        }))
        .pipe(rename({ basename: "icons", extname: ".scss" }))
        .pipe(gulp.dest(path.join(config.root, "scss", "core")));
    })
    .pipe(gulp.dest(path.join(config.root, "fonts")));
});
