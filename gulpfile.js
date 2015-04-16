var gulp = require('gulp');
var del = require('del');
var amdOptimize = require("amd-optimize");
var concat = require('gulp-concat');
var bower = require('gulp-bower');
var plumber = require('gulp-plumber');

// var args = require('yargs').argv;
// var config = require('./gulp.config')();
// var minifyCSS = require('gulp-minify-css');
// var uglify  = require('gulp-uglify');
// var runSequence = require('run-sequence');
// var ngAnnotate = require('gulp-ng-annotate');
// var gulpif = require('gulp-if');


// var sourcemaps = require('gulp-sourcemaps');
// var rename = require('gulp-rename');
// var less = require('gulp-less');
// var util = require('gulp-util');


// gulp.task("indexOpt", function () {
 
//   return gulp.src("src/app/**/*.js")
//     // Traces all modules and outputs them in the correct order. 
//     .pipe(amdOptimize("src/main"))
//     .pipe(concat("index.js"))
//     .pipe(gulp.dest("client"));
 
// });

gulp.task('bowerInstall', function () {
    
    return bower()
        .pipe(plumber())
        .pipe(gulp.dest('src/lib/'));
});

gulp.task('cleanLib', function(done){
    del(['wwwroot/lib/'], done);
});

gulp.task('copyLib',['cleanLib'], function() {
  // place code for your default task here
  return gulp.src(['./src/lib/**/*'])
  .pipe(gulp.dest('./wwwroot/lib/'));
});

gulp.task('cleanApp', function(done){
    del(['wwwroot/app/'], done);
});

gulp.task('copyApp',['cleanApp'], function() {
  // place code for your default task here
  return gulp.src(['./src/app/**/*'])
  .pipe(gulp.dest('./wwwroot/app/'));
});

gulp.task('cleanStatic', function(done){
    del(['./wwwroot/index.html','./wwwroot/main.js','./wwwroot/rconfig.js'], done);
});

gulp.task('copyStatic',['cleanStatic'], function() {
  // place code for your default task here
  return gulp.src(['./src/index.html','./src/main.js','./src/rconfig.js','./src/includes.js'])
  .pipe(gulp.dest('./wwwroot/'));
});

gulp.task('quickCopy',['copyApp','copyStatic']);
gulp.task('longCopy',['copyLib','copyApp','copyStatic']);