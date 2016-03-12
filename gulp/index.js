'use strict';

var fs = require('fs');

try {
    var config = require("./config");
} catch (e) {
    console.error("Error! Missing config file, have you forgot to "+
            "copy config.template.js?");
    process.exit(e.code);
}

var tasks = fs.readdirSync('./gulp/tasks/');

// Make sure only .js files are loaded
tasks = tasks.filter(function(file) {
    return file.substr(-3) === '.js';
});

tasks.forEach(function(task) {
    require('./tasks/' + task);
});

