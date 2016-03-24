'use strict';

var path = require('path');
var fs = require('fs');
var Config = require('./config');


var TaskRunner = function() {
}

TaskRunner.prototype.loadConfig = function() {
    var params = JSON.parse(fs.readFileSync(".taskrunnerrc", "utf8"));
    this.config = new Config(params);
}


TaskRunner.prototype.loadTasks = function(tasks) {
    var tasks = this.config.tasks;

    if (! tasks.length) {
        tasks = fs.readdirSync('./gulp/tasks/');

        // Make sure only .js files are loaded
        tasks = tasks.filter(function(file) {
            return file.substr(-3) === '.js';
        });
    }

    tasks.forEach(function(task) {
        require('./tasks/' + task);
    });
}

TaskRunner.prototype.run = function() {
    this.loadConfig();
    this.loadTasks();
}


module.exports = new TaskRunner();

