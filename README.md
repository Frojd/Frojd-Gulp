Gulp
====

Build script based on Dan Tello's recipe.
- Bundles scripts with browserify
- Compiles less files
- Minifies images

## Installing

Place in root of project and edit config.js and supply path to the directory where your scripts, less files and images are located.
! Note: Use main.less and main.js as your main files

```
// Example Wordpress
/root
|-- /gulp
|-- gulpfile.js
|-- /src
    |-- /wp-admin
    |-- /wp-content
        |-- /themes
            |-- /theme-name
                |-- /img
                |-- /less
                    |-- main.less
                |-- /js
                    |-- main.js
    |-- /wp-includes

// config.js
root: path.resolve('src/wp-content/themes/theme-name/')
```

Then open the terminal and go to the root directory and run:
```
npm install
```

Make sure gulp is installed globally:
```
npm install gulp -g
```

## Running

Run:

```
gulp watch
````

Assets are built to a "builds" folder, use these files in your project.
Use minified version in production environment and non-minified version for debugging.
