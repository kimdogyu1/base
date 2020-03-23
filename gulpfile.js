'use stric';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var index = require('gulp-index');

gulp.task('clean', function() {
	return del(['logs/src/*.html'])
});

gulp.task('sass', function(){
    return gulp.src('./src/scss/**/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function(){
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('index', function() {
  return gulp.src('./src/*.html')
    .pipe(index())
    .pipe(gulp.dest('./src/'));
});

gulp.task('default', ['sass:watch', 'sass']);








//////////////////////////pc+ mo

'use stric';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var index = require('gulp-index');

gulp.task('clean', function() {
	return del(['logs/src/*.html'])
});

gulp.task('sass_pc', function(){
    return gulp.src('./src/pc/scss/**/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./src/pc/css'));
});

gulp.task('sass_pc:watch', function(){
    gulp.watch('./src/pc/scss/**/*.scss', ['sass_pc']);
});

gulp.task('index_pc', function() {
  return gulp.src('./src/pc/*.html')
    .pipe(index())
    .pipe(gulp.dest('./src/pc/'));
});

gulp.task('sass_mobile', function(){
    return gulp.src('./src/mobile/scss/**/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./src/mobile/css'));
});

gulp.task('sass_mobile:watch', function(){
    gulp.watch('./src/mobile/scss/**/*.scss', ['sass_mobile']);
});

gulp.task('index_mobile', function() {
  return gulp.src('./src/mobile/*.html')
    .pipe(index())
    .pipe(gulp.dest('./src/mobile/'));
});

gulp.task('default', ['sass_pc:watch', 'sass_pc','sass_mobile:watch', 'sass_mobile']);

