"use strict";

var path = require("path");

module.exports = {
    // Path to css, js and img folders
    root: path.resolve("./"),
    // Path to build folder
    buildPath: function() { return path.join(this.root, "builds"); },
    // Beep on error
    beep: true,
    // Folders to exclude for watch and jshint (optional)
    excludedFolders: [ "node_modules" ],
    // Folders to copy to the build folder (optional). You probably want "fonts"
    foldersToCopy: [],
    // Proxy used with browser sync, examples local.dev, localhost:8888 (optional)
    proxy: ""
};
