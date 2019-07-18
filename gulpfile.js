const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('hello', function(done){
  console.log('hello from gulp');
  done();
});

gulp.task('sass', function(){//task to compile sass to css
  return gulp.src('src/scss/main.scss')//source
  .pipe(sass())//plugin
  .pipe(gulp.dest('src/css'))//output
})