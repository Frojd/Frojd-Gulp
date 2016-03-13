'use strict';

var path = require('path');

module.exports = {
    // Load specific tasks (empty means load all tasks)
    tasks: [],
    // Path to css, js and img folders
    root: path.resolve('./'),
    // Path to build folder
    buildPath: function() { return path.join(this.root, 'builds'); },
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
