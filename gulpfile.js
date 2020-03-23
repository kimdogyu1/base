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
