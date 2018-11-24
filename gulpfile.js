
const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
sass.compiler = require('node-sass');

const src = './src';
const dest = './dest';

gulp_sass = () => {
  return gulp.src(src + '/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(dest + '/css'));
};

gulp_html = () => {
  return gulp.src(src + '/html/**/*.html')
    .pipe(gulp.dest(dest + '/'));
};

gulp_watch = () => {
  watch(src + '/html/**/*.html', gulp_html)
  return watch(src + '/sass/**/*.sass', gulp_sass);
};

gulp_res = () => {
  return gulp.src(src + '/res/**')
    .pipe(gulp.dest(dest + '/'));
};

gulp.task('default', gulp.series(gulp_html, gulp_sass, gulp_res));
gulp.task('watch', gulp_watch);
