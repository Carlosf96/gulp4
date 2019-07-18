const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('hello', function(done){
  console.log('hello from gulp');
  done();
});

gulp.task('sass', function(){//task to compile sass to css
  return gulp.src('src/scss/*.scss')//source
  .pipe(sass())//gulp-sass plugin to compile sass to css
  .pipe(autoprefixer())//gulp-autoprefixer plugin for vendor free css
  .pipe(browserSync.reload{
    stream: true
  })
  .pipe(gulp.dest('src/css'))//output
});

gulp.task('serve', function(){
  browserSync.init({
    server: 'src',
    port: 4000
  });
});//serves our assets on given port

gulp.task('reload', function(done){
  browserSync.reload();
  done();
})//browser reload function

gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', gulp.series('sass', 'reload'));//watches for changes and executes a function on change
});//auto compiles sass to css on change

gulp.task('live-server', gulp.series('serve', 'watch')); //live server function will create the live server that will serve and watch fo r any changes made to the sass file