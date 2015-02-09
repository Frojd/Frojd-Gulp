"use strict";

var gulp = require("gulp");
var path = require("path");
var livereload = require("gulp-livereload");
var getSource = require("../util/getSource");
var config = require("../config");
var source =  getSource(
    "js", 
    [ path.join("js", "**", "*.js") ], 
    config.jsFoldersToExclude, 
    true
);

gulp.task("watch", function() {

    livereload.listen();

    gulp.watch(
        [ path.join("less", "**", "*.less") ],
        { cwd: config.root },
        [ "less" ]
    );

    gulp.watch(
        source,
        { cwd: config.root },
        [ "javascript" ]
    );

    gulp.watch(
        [ path.join("img", "**") ],
        { cwd: config.root },
        [ "images" ]
    );

    gulp.watch(
        [ path.join("icons", "**") ],
        { cwd: config.root },
        [ "icons" ]
    );

    gulp.watch(
        [ path.join(config.buildPath(), "**") ]
    ).on("change", livereload.changed);

});

