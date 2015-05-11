//Dependencias
var gulp = require('gulp'),
 connect = require('gulp-connect'),
 
  uglify = require('gulp-uglify'),

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
    gulp.watch('./public/**/*.html', ['html-reload']);
    
    gulp.watch('./app/**/*.js', ['browserify']);
    gulp.watch('./public/**/*.js', ['js-reload']);

    gulp.watch('./styles/**/*.scss', ['sass']);
    gulp.watch('./public/css/**/*.css', ['css-reload']);
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
    entries:'./app/index.js',
    debug:true
  })
  .bundle()
  .pipe(source('./bundle.js'))
  .pipe(buffer()) //Si le aplicacamos uglify despues del bundle() dará error porque por asincronía, aún no ha sido generado el fichero cuando queremos acceder a el.
  //.pipe(uglify())
  .pipe(gulp.dest('public'));
});

//Sass
gulp.task('sass', function () {
    gulp.src('./styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});


//Task html livereload
gulp.task('html-reload', function() {
  gulp.src('./public/**/*.html')
    .pipe(connect.reload());
});

//Task js livereload
gulp.task('js-reload', function() {
  gulp.src('./public/**/*.js')
    .pipe(connect.reload());
});

//Task css livereload
gulp.task('css-reload', function() {
  gulp.src('./public/css/**/*.css')
    .pipe(connect.reload());
});


