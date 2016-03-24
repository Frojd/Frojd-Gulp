'use strict';

var path = require('path');
var fs = require('fs');


var Config = function(params) {
    var root = path.resolve('./');
    var defaultParams = {
        // Load specific tasks (empty means load all tasks)
        tasks: [],
        // Path to css, js and img folders
        root: root,
        // Path to build folder
        buildPath: path.join(root, 'builds'),
        // Beep on error
        beep: true,
        // Folders to exclude for watch and jshint (optional)
        excludedFolders: [],
        // Folders to copy to the build folder, you probably want "fonts" (optional)
        copyFolders: [
            // 'fonts',                 // copy ./fonts to builds/fonts
            // {'fonts': 'css/fonts'}   // copy ./fonts to builds/css/fonts
        ]
    };

    this.params = Object.assign(defaultParams, params);
    for (var key in this.params) {
        this[key] = this.params[key];
    }
}

module.exports = Config;
