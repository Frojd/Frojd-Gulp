"use strict";

var gulp = require("gulp");
var path = require("path");

var config = require("../config");
var getSources = require("../util/getSources");

gulp.task("watch", function() {

    gulp.watch(
        [path.join("scss", "**", "*.scss")],
        {cwd: config.root},
        ["css"]
    );

    gulp.watch(
        [path.join("js", "**", "*.js")],
        {cwd: config.root},
        ["js"]
    );

    gulp.watch(
        [path.join("icons", "**")],
        { cwd: config.root },
        ["icons"]
    );

    gulp.watch(
        // TODO: Check for updates on gulp watch
        // TODO: Kolla med nivåer
        getSources(config.foldersToCopy),
        {cwd: config.root},
        ["copy"]
    );
});
