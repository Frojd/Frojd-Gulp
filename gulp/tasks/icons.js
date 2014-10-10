"use strict";

var gulp = require("gulp"),
    iconFont = require("gulp-iconfont"),
    consolidate = require("gulp-consolidate"),
    rename = require("gulp-rename"),
    path = require("path"),
    config = require("../config"),
    fontName = "icon";

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
                .pipe(gulp.dest(path.join(config.root, "less")));
        })
        .pipe(gulp.dest(path.join(config.root, "fonts")));
});
