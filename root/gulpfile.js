'use strict';

var gulp    = require('gulp'),
    eslint  = require('gulp-eslint'),
    mocha   = require('gulp-mocha'),
    del     = require('del'),
    webpack = require('webpack-stream');

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

gulp.task('webpack', ['test', 'clean'], function () {
  var webpackConfig = {
    output: { filename: '{{ name }}.js' },
    devtool: 'source-map'
  };

  return gulp.src('src/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['index', 'webpack']);
