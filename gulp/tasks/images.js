var changed  = require('gulp-changed');
var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var path     = require('path');
var config   = require('../config');

gulp.task('images', function() {
	gulp.src(path.join(config.root, 'img', '**'))
		.pipe(changed(path.join(config.root, 'builds', 'img')))
		.pipe(imagemin())
		.pipe(gulp.dest(path.join(config.root, 'builds', 'img')));
});
