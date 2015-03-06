"use strict";

var gulp = require("gulp");
var iconFont = require("gulp-iconfont");
var consolidate = require("gulp-consolidate");
var rename = require("gulp-rename");
var path = require("path");
var config = require("../config");
var fontName = "icon";

gulp.task("icons", function() {
    gulp.src([ path.join(config.root, "icons", "*.svg") ])
        .pipe(iconFont({
            fontName: fontName,
            appendCodepoints: true,
            normalize: true
        }))
        .on("codepoints", function(codepoints, options) {
            gulp.src([ path.resolve(__dirname, "../templates/icons.mustache") ])
                .pipe(consolidate("mustache", {
                    glyphs: codepoints.map(function(point) {
                        return {
                            name: point.name,
                            codepoint: point.codepoint.toString(16)
                        };
                    }),
                    fontName: fontName,
                    fontPath: "../../fonts/",
                    className: "icon"
                }))
                .pipe(rename({ basename: "icons", extname: ".less" }))
                .pipe(gulp.dest(path.join(config.root, "less", "core")));
        })
        .pipe(gulp.dest(path.join(config.root, "fonts")));
});
