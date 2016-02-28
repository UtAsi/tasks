'use strict'
import gulp from 'gulp'
import eslint from 'gulp-eslint'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'

gulp.task('eslint', function () {
  return gulp.src(['src/js/**/*.js','!node_modules/**', '!**/coverage/**'])
  .pipe(plumber({
    errorHandler: notify.onError("lint Error: <%= error.message %>")
  }))
  .pipe(eslint({useEslintrc: true}))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});