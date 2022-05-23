var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
const { series } = require('gulp');

function cleanTask(cb) {
  gulp.src('dist/**', { read: false }).pipe(clean());
  cb();
}

function uglifyJs(cb) {
  gulp
    .src('src/**.js')
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('dist/js'));
  cb();
}

function uglifyCss(cb) {
  gulp
    .src('src/**.css')
    .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/css'));

  cb();
}

function injectFiles(cb) {
  var css = gulp.src('dist/**/*.css');
  var js = gulp.src('dist/**/*.js');
  gulp
    .src('src/index.html')
    .pipe(inject(css, { relative: true }))
    .pipe(inject(js, { relative: true }))
    .pipe(gulp.dest('src'));
  cb();
}

exports.default = series(cleanTask, uglifyJs, uglifyCss, injectFiles);
