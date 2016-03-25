'use strict';

var path = require('path');


function getSources(folders, exclude) {
    var config = require('../').config;

    exclude = typeof exclude !== 'undefined' ? exclude : false;
    var sources = [];

    for (var i = 0; i < folders.length; i++) {
        if (exclude) {
            sources.push(
                path.join('!', config.root, folders[i], '{,/**}')
            );
        } else {
            sources.push(
                path.join(config.root, folders[i], '**', '*')
            );
        }
    }

    return sources;
}

module.exports = {
    getSources: getSources
};
