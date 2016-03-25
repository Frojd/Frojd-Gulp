/**
 * Taskrunner class
 */

'use strict';

var fs = require('fs');

var Config = require('./config');


var TaskRunner = function() {
}

TaskRunner.prototype.loadConfig = function() {
    var params = {};

    try {
        params = JSON.parse(fs.readFileSync('.taskrunnerrc', 'utf8'));
    } catch(e) {
        if(e.code === 'ENOENT') {
            console.warn('No .taskrunnerrc file found. Add next to package.json file to get rid of this warning.');
        } else {
            throw('Unexpected error when parsing taskrunner, please fix your stuff!', e);
        }
    }

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

