[![Build Status](https://travis-ci.org/Frojd/Frojd-Gulp.svg?branch=master)](https://travis-ci.org/Frojd/Frojd-Gulp)

# Gulp

This is gulp based taskrunner that:

- Bundles scripts with browserify
- Compiles scss files


## Supports

- SASS
- JS with ES6
- LESS (deprecated)


## Requirements

- Node >= 5.0.0


## Installing

1. Make sure gulp is installed globally:

	```
	npm install gulp -g
	```
	
2. Place the directory `gulp` and the files `packages.json` and `gulpfile.js` from this repository to your project.
	1. (Wordpress) put in `src/wp-content/themes/theme-name`
	2. (Django) put in the core apps static folder `src/core/static/core`
3. Run `npm install`
4. Create a file called `.taskrunnerrc` and put it besides the `gulp` directory.
	
	```
	/frontend
	|-- /gulp
	|-- .taskrunnerrc
	|-- js
	|-- sass
	...
	```
	
5. Add proper configuration to your `.taskrunnerrc`.
	
	```	
	{
	    "root": "/myproject/src/frontend",
	    "buildPath": "/myproject/src/frontend/dist"
	}
	```
6. Done!
	

## Running

- `npm run build`
	- Compiles assets and stores them in your build path

- `npm run watch`
	- Starts watching for file changes and compiles accordingly


## Configuration

The config file `.taskrunnerrc` supports these options, all of them are optional.

```
// Load specific tasks
tasks: [],		// Run all tasks
tasks: ['js'], 	// Run only the js task

// Path to css, js and img folders (default is ./)
root: '/myprojectdir',

// Path to build folder (default is ./builds)
buildPath: '/myprojectdir/dist',

// Beep on error
beep: true,   

// Folders to exclude for watch and jshint (optional)
excludedFolders: [],

// Folders to copy to the build folder, you probably want "fonts" (optional) 
copyFolders: [
	// 'fonts',                 // copy ./fonts to builds/fonts
	// {'fonts': 'css/fonts'}   // copy ./fonts to builds/css/fonts
]
```


## Examples

Take a look at the test runner in `test/frontend-project`.


## Tests

Tests are writting in mocca and are runs on every git-push.

- `npm run test` (it's an alias for `mocha --reporter spec test`)


### Generate file checksum

Libraries do get updated and syntax might change and that can cause the file checksum to change (and cause our tests to fail).

- OSX: `md5 filepath.js`


## Contributing

Want to contribute? Awesome. Just send a pull request.


## License

Frojd-Gulp is released under the MIT License.