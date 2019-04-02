# Gulp Basic Functions for Version-4 #

**This file contains some basic functions for Gulp v.4**

**Such as**
*gulp-sass,*
*gulp-uglifycss,*
*gulp-uglify,*
*browser-sync*

You must install `NodeJs` in your computer
Then install `Gulp` in your computer for globally

Code for Gulp global install
`npm install gulp-cli -g`

Then open your project file and `npm init`

After `npm init` then install Gulp locally and add some package like `gulp-sass` and `browser-sync`

Code for Gulp local install and add some package like `gulp-sass` and `browser-sync`
`npm install --save-dev gulp gulp-sass browser-sync`

Then create a new file that name will be must `gulpfile.js`
If you want to minify css, you have to install `gulp-uglifycss` package ..  Link `https://www.npmjs.com/package/gulp-uglifycss` Or `npm install --save gulp-uglifycss`.......  If you want to minify js, you have to install `gulp-uglify ` package ..  Link `https://www.npmjs.com/package/gulp-uglify` Or `npm install --save-dev gulp-uglify`




##Source code

```javaScript

const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

function style() {
  // 1. where is scss file
  return gulp.src('./sass/**/*.scss')
  // 2. pass that file through sass compiler
    .pipe(sass())
  // 3. Where I save my compiled css
    .pipe(gulp.dest('./css'))

    // stream changes to all browser
    .pipe(browserSync.stream());
}

function miniCss() {
  // 1. where is css file
  return gulp.src('./css/style.css')
  // 2. pass that file through uglifycss
    .pipe(uglifycss())
  // 3. Where I save my minify css
    .pipe(gulp.dest('./dist/'))

    // stream changes to all browser
    .pipe(browserSync.stream());
}

function miniJs() {
  // 1. where is js file
  return gulp.src('./js/main.js')
  // 2. pass that file through uglify
    .pipe(uglify())
  // 3. Where I save my minify js
    .pipe(gulp.dest('./dist/'))

    // stream changes to all browser
    .pipe(browserSync.stream());
}


// add watch function for all functions
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./sass/**/*.scss', style);
  gulp.watch('./css/style.css', miniCss);
  gulp.watch('./css/style.css', miniJs);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

/*
----call all function----
You can access each function indivisually

ex.
  gulp style
  gulp miniCss
  gulp miniJs
  gulp watch
==========================
If you run watch function, All function automatically run.
And show the project to your browser
-----------------
*/
exports.style = style;
exports.miniCss = miniCss;
exports.miniJs = miniJs;
exports.watch = watch;

```


##### If you're interested this project, Please contribute and hit the star button.

| Social Medias | Links                                                      |
| ------------- | ---------------------------------------------------------- |
| Facebook      | [Facebook Profile](https://www.facebook.com/fahaddevs)     |
| Linkedin      | [Linkedin Profile](https://www.linkedin.com/in/fahaddevs/) |
| Twitter       | [Twitter Profile](https://twitter.com/fahaddevs)           |
| Instagram     | [Instagram Profile](https://www.instagram.com/fahaddevs/)  |
| CodePen       | [CodePen Profile](https://codepen.io/fahaddevs/)           |