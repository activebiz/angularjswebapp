var gulp = require('gulp');
var del = require('del');
var amdOptimize = require("amd-optimize");
var concat = require('gulp-concat');
var bower = require('gulp-bower');
var plumber = require('gulp-plumber');
var config = require('./gulp.config')();

// var args = require('yargs').argv;
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
    del(config.paths.destExtLib, done);
});

gulp.task('Lib',['cleanLib'], function() {
  // place code for your default task here
  return gulp.src(config.paths.srcExtLib)
  .pipe(gulp.dest(config.paths.destExtLib));
});

gulp.task('cleanApp', function(done){
    del(config.paths.destApp, done);
});

gulp.task('App',['cleanApp'], function() {
  // place code for your default task here
  return gulp.src(config.paths.srcApp, {base: config.paths.src})
  .pipe(gulp.dest(config.paths.destApp));
});

gulp.task('cleanStatic', function(done){
    del(config.paths.destStatic, done);
});

gulp.task('Static',['cleanStatic'], function() {
  // place code for your default task here
  return gulp.src(config.paths.srcStatic, {base: config.paths.src})
  .pipe(gulp.dest(config.paths.dest));
});

gulp.task('cleanApi', function(done){
    del(config.paths.destApi, done);
});

gulp.task('Api',['cleanApi'], function() {
  // place code for your default task here
  return gulp.src(config.paths.srcApi, {base: config.paths.src})
  .pipe(gulp.dest(config.paths.dest));
});

gulp.task('Quick',['App','Static','Api']);
gulp.task('Full',['Lib','App','Static', 'Api']);

gulp.task('DevWatch', function() {
    gulp.watch([config.paths.srcStatic], ['Static']);
    gulp.watch([config.paths.srcApp], ['App']);
});