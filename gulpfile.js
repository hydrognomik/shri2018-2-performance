const gulp = require('gulp');
const critical = require('critical').stream;

gulp.task('default', () => {
  return gulp.src('index.html')
    .pipe(critical({
      base: '.',
      inline: true,
      minify: true,
      extract: true,
      css: 'styles.css'
    }))
    .on('error', err => console.error(err.message))
    .pipe(gulp.dest('dist'));
});
