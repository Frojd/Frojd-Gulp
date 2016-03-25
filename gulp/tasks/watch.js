"use strict";

var gulp = require("gulp");
var path = require("path");

var getSources = require("../util/sources").getSources;

gulp.task("watch", function() {
    var config = require('../').config;

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

    var sources = config.copyFolders;
    sources = sources.map(function(folder) {
        if (typeof folder === 'object') {
            return Object.keys(folder)[0];
        }

        return folder;
    });

    gulp.watch(
        // TODO: Check for updates on gulp watch
        // TODO: Kolla med nivåer
        getSources(sources),
        {cwd: config.root},
        ["copy"]
    );
});
