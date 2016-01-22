'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var del = require('del');
var webpack = require('webpack-stream');
var templateCache = require("gulp-angular-templatecache");

gulp.task('lint', function () {
  var src = [
    './src/**/*.js',
    './test/**/*.js'
  ];

  return gulp.src(src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('test', ['lint'], function () {
  return gulp.src('test/**/*.js')
    .pipe(mocha());
});

gulp.task('clean', function () {
  return del('dist');
});

gulp.task('index', ['clean'], function () {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('templates', ['clean'], function () {
  return gulp.src('src/components/**/*.html')
    .pipe(templateCache('templates.js', {
      module: 'templates',
      standalone: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('webpack', ['test', 'clean'], function () {
  return gulp.src('src/app.js')
    .pipe(webpack({
      output: { filename: 'main.js' },
      devtool: 'source-map'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['index', 'templates', 'webpack']);
