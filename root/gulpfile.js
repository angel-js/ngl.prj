'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var del = require('del');
var templateCache = require("gulp-angular-templatecache");
var webpack = require('webpack-stream');
var sourcemaps = require('gulp-sourcemaps');

var postcss = require('gulp-postcss')([
  require('postcss-import')({ path: ['node_modules'] }),
  require('postcss-nested'),
  require('postcss-extend')
]);

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

gulp.task('resources', ['clean'], function () {
  return gulp.src('resources/**')
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

gulp.task('styles', ['clean'], function () {
  return gulp.src('src/styles.css')
    .pipe(sourcemaps.init())
    .pipe(postcss)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', ['test', 'clean'], function () {
  return gulp.src('src/app.js')
    .pipe(webpack({
      output: { filename: 'main.js' },
      devtool: 'source-map'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['index', 'templates', 'styles', 'scripts']);
