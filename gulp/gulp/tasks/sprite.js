'use strict'
import * as pkg from '../../package.json'

import gulp from 'gulp'
import spritesmith from 'gulp.spritesmith'
import merge from 'merge-stream'
import notify from 'gulp-notify'

const destPath = pkg.config.dest + '/img';
const tmpPath = pkg.config.tmp + '/img';

gulp.task('img:sprite', () => {
  const spriteData = gulp.src('./src/img/sprites/*.png')
    .pipe(spritesmith({
      imgPath: '/' + destPath + '/sprite-' + pkg.config.versions.img.sprite + '.png',
      imgName: 'sprite-' + pkg.config.versions.img.sprite + '.png',
      cssName: '_sprite.scss',
      padding: 4
    }));

  const imgStream = spriteData.img
    .pipe(gulp.dest(tmpPath));

  const cssStream = spriteData.css
    .pipe(gulp.dest('./src/css/foundation'));

  return merge(imgStream, cssStream);
});