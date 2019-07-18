const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('hello', function(done){
  console.log('hello from gulp');
  done();
});

gulp.task('sass', function(){//task to compile sass to css
  return gulp.src('src/scss/*.scss')//source
  .pipe(sass())//plugin
  .pipe(gulp.dest('src/css'))//output
});



gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));//watches for changes and executes a function on change
});//auto compiles sass to css on change