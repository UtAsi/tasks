'use strict'

import gulp from 'gulp'
import spritesmith from 'gulp.spritesmith'
import merge from 'merge-stream'
import notify from 'gulp-notify'

gulp.task('img:sprite', () => {
  const spriteData = gulp.src('./src/img/sprites/*.png')
    .pipe(spritesmith({
      imgPath: '/dest/img/sprite.png',
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      padding: 4
    }));

  const imgStream = spriteData.img
    .pipe(gulp.dest('./tmp/img'));

  const cssStream = spriteData.css
    .pipe(gulp.dest('./src/css/foundation'));

  return merge(imgStream, cssStream);
});