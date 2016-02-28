'use strict'

import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import sorting from 'postcss-sorting'
import stylelint from 'stylelint';
import reporter from 'postcss-reporter'
import cssnano from 'gulp-cssnano'
import rename from 'gulp-rename'
import sequence from 'run-sequence'

gulp.task('css:compile', () => {
  return gulp.src('./src/css/index.scss')
    .pipe(plumber({
      errorHandler: notify.onError("CSS Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 2 versions']
      }),
      stylelint(),
      reporter({
        clearMessages: true
      }),
      sorting()
    ]))
    .pipe(gulp.dest('./tmp/css'))
});

gulp.task('css:min', () => {
  return gulp.src('./tmp/css/index.css')
    .pipe(cssnano())
    .pipe(rename((path) => {
      path.basename += '.min'
    }))
    .pipe(gulp.dest('./dest/css'))
});

gulp.task('css', (callback) => {
  return sequence('css:compile', 'css:min', callback);
})

gulp.task('build:css', ['css']);