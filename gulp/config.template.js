"use strict";

var path = require("path");

module.exports = {
    root: path.resolve("./"), // Path to css, js and img folders
    buildPath: function() { return this.root + "/builds"; }, // Path to build folder
    excludedJsFolder: "libs", // Folder to exclude for jshint
    beep: true // Beep on error
};
