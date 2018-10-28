const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const brotli = require('gulp-brotli');

gulp.task('default', ['htmlmin', 'cssmin', 'jsmin', 'assets']);

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
    .pipe(brotli.compress())
    .pipe(gulp.dest('./docs'));
});

gulp.task('assets', () => {
  return gulp.src('./assets/*')
    .pipe(brotli.compress())
    .pipe(gulp.dest('./docs/assets'))
});
