"use strict";

var gulp = require("gulp");
var path = require("path");

var config = require("../config");
var getSource = require("../util/getSource");
var source =  getSource(
    "js",
    [ path.join("js", "**", "*.js") ],
    config.jsFoldersToExclude,
    true
);

gulp.task("watch", [ "browserSync" ], function() {

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
});

