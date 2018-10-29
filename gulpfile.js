const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
// const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const zopfli = require('gulp-zopfli');

gulp.task('default', ['htmlmin', 'cssmin', 'jsmin', 'assets', 'compress']);

gulp.task('htmlmin', () => {
  return gulp.src('./src/index.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('./docs'));
});

gulp.task('cssmin', () => {
  return gulp.src('./src/styles.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./docs'));
});

gulp.task('jsmin', () => {
  return gulp.src('./src/scripts.js')
    // .pipe(uglify())
    .pipe(gulp.dest('./docs'));
});

gulp.task('compress', () => {
  return gulp.src([
    './docs/index.html',
    './docs/scripts.js',
    './docs/styles.css'
  ])
    .pipe(zopfli())
    .pipe(gulp.dest('./docs'));
});

gulp.task('assets', () => {
  return gulp.src('./assets/*')
    .pipe(gulp.dest('./docs/assets'))
    .pipe(zopfli())
    .pipe(gulp.dest('./docs/assets'))
});
