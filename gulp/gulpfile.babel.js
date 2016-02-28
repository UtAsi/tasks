'use strict'

import gulp from 'gulp'
import requireDir from 'require-dir'
import sequence from 'run-sequence'

requireDir('./gulp/tasks', {recurse: true});

gulp.task('build', (callback) => {
  return sequence(
    ['eslint'],
    ['pre-test'],
    ['test'],
    ['img:sprite', 'build:css', 'build:img', 'build:js']
  );
});

gulp.task('watch', () => {
  gulp.watch('src/css/**/*.scss', ['build:css']);
  gulp.watch('src/js/**/*.js', ['pre-test', 'test', 'eslint', 'build:js']);
});

gulp.task('default', ['build']);