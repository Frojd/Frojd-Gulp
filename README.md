**This project is no long maintained and is deprecated**

Gulp
====

Build script based on Dan Tello's recipe.
- Bundles scripts with browserify
- Compiles scss files
- Minifies images
- Creates icon fonts from svg

## Requirements

- Node >= 5.0.0

## Installing

Place in root of project and edit config.js and supply path to the directory where your scripts, less files and images are located.
Rename config.template.js to config.js
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
                |-- /icons
                |-- /img
                |-- /js
                    |-- index.js
                |-- /scss
                    |-- index.less
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

## Icons

Fonts are created by just dropping svg icons in the icons folder during watch. Svg should be single coloured.

## Running

Run:

```
gulp
````

Assets are built to a "builds" folder, use these files in your project.
Use minified version in production environment and non-minified version for debugging.
