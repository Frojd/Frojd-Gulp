'use strict';

var gutil = require('gulp-util');


// Handle an error based on its severity level.
// Log all levels, and exit the process for fatal levels.
function handleError(stop, error) {
    var config = require('../').config;
    gutil.log(error.message);

    if (config.beep) {
        gutil.beep();
    }

    if (stop) {
        process.exit(1);
    }
}

// Convenience handler for error-level errors.
function errorHandler(error) {
    handleError.call(this, true, error);
}

// Convenience handler for warning-level errors.
function warningHandler(error) {
    handleError.call(this, false, error);
}


module.exports = {
    error: errorHandler,
    warning: warningHandler
};
