//Dependencias
var gulp = require('gulp'),
 connect = require('gulp-connect'),

  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),

browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),

    sass = require('gulp-sass');

// Tasks

//Default
gulp.task('default', ['serve','watch']);

//Build
gulp.task('build', ['browserify']);

//Watch
gulp.task('watch', function() {
    gulp.watch('./public/**/*.html', ['livereload']);
    
    gulp.watch('./app/**/*.js', ['browserify']);
    gulp.watch('./app/**/*.hbs', ['browserify']);
    gulp.watch('./public/**/*.js', ['livereload']);

    gulp.watch('./app/**/*.scss', ['sass']);
    gulp.watch('./public/css/**/*.css', ['livereload']);
});

//Serve (for development)
gulp.task('serve', function () {
    connect.server({
        hostname: '0.0.0.0',
        port: 9000,
        root: 'public',
        livereload: true
    })
});

//Browserify
gulp.task('browserify',function(){
  return browserify({
    entries:'./app/app-main.js',
    debug:true,
    transform: ['hbsfy','babelify']
  })
  .bundle()
  .pipe(source('./bundle.js'))
  .pipe(buffer()) //Si le aplicacamos uglify despues del bundle() dará error porque por asincronía, aún no ha sido generado el fichero cuando queremos acceder a el.
  //.pipe(uglify())
  .pipe(gulp.dest('public'));
});

//Sass
gulp.task('sass', function () {
    gulp.src('./app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('public/css'));
});


//Task html livereload
gulp.task('livereload', function() {
  gulp.src('./public/**/*')
    .pipe(connect.reload());
});
