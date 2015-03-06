"use strict";

var path = require("path");

module.exports = {
    // Path to css, js and img folders
    root: path.resolve("./"), 
    // Path to build folder
    buildPath: function() { return path.join(this.root, "builds"); }, 
    // Folders to exclude for watch and jshint
    jsFoldersToExclude: [ "node_modules" ],
    // Folders to copy to the build folder
    jsFoldersToCopy: [], 
    // Beep on error
    beep: true 
};

