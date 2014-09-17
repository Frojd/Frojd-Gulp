"use strict";

var path = require("path");

module.exports = {
    // Example wordpress: src/wp-content/themes/theme-name/
    root: path.resolve("./app"),
    beep: true,
    cssRules: {
        strictPropertyOrder: false,
        noIDs: true,
        noJSPrefix: true,
        noOverqualifying: true,
        noUnderscores: false,
        noUniversalSelectors: false,
        zeroUnits: true
    }
};
