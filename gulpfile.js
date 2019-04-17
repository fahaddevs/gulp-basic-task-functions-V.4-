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