const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');

gulp.task('hello', function(done){
  console.log('hello from gulp');
  done();
});

gulp.task('sass', function(){//task to compile sass to css
  return gulp.src('src/scss/*.scss')//source
  .pipe(sass())//gulp-sass plugin to compile sass to css
  .pipe(autoprefixer())//gulp-autoprefixer plugin for vendor free css
  .pipe(browserSync.reload({
    stream: true
  }))
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

gulp.task('asset-opt', function(){
  return gulp.src('src/*.html')
  .pipe(useref())
  .pipe(gulpif('*.js',uglify()))
  .pipe(gulp.dest('dist'))
});//to concat any css or js files into a single file

gulp.task('fonts', function(){
   return gulp.src('src/fonts/**/*')
         .pipe(gulp.dest('dist'))
});//copies fonts to dist dir