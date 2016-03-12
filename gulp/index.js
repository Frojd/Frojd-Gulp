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

tasks.forEach(function(task) {
    require('./tasks/' + task);
});

