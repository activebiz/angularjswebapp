var gulp = require('gulp');
var del = require('del');
var amdOptimize = require("amd-optimize");
var concat = require('gulp-concat');
var bower = require('gulp-bower');
var plumber = require('gulp-plumber');
var config = require('./gulp.config')();

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
  return gulp.src(config.paths.srcApp)
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