'use strict';

var path = require('path');

module.exports = {
    // Path to css, js and img folders
    root: path.resolve('./'),
    // Path to build folder
    buildPath: function() { return path.join(this.root, 'builds'); },
    // Beep on error
    beep: true,
    // Folders to exclude for watch and jshint (optional)
    excludedFolders: [],
    // Folders to copy to the build folder, you probably want "fonts" (optional)
    foldersToCopy: []
};
