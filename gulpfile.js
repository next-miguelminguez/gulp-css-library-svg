"use strict";

// more info:
// https://github.com/svg/svgo/tree/master/plugins

var config   = require('./config.json');
var gulp     = require('gulp');

var path     = require('path');
var svgmin   = require('gulp-svgmin');
var svgo     = require('gulp-svgo');
var replace  = require('gulp-replace');
var rename   = require("gulp-rename");

gulp.task('svg', function () {
  return gulp
    .src( config.src + '/*.svg' )
    .pipe( gulp.dest(config.dest) );
});
gulp.task('svgo', function () {
  return gulp
    .src( config.src + '/*.svg' )
    .pipe(svgo())
    .pipe( rename({
      suffix: "--svgo",
      extname: ".svg"
    }) )
    .pipe( gulp.dest(config.dest) );
});
gulp.task('svgmin', function () {
  return gulp
    .src( config.src + '/*.svg' )
    .pipe( replace(' id=', ' class=') )
    .pipe( replace('<?','<?xml-stylesheet type="text/css" href="../../src/init.css"?><?') )
    .pipe( svgmin({
      js2svg: {
        pretty: true
      },
      plugins: [
        {removeDimensions:    true},
        {removeViewBox:       false},
        {convertStyleToAttrs: false}
      ]
    }) )
    .pipe( rename({
      suffix: "--svgmin",
      extname: ".svg"
    }) )
    .pipe( gulp.dest(config.dest) );
});

// gulp.task('default', ['svg', 'svgo', 'svgmin'] );
gulp.task('default', [ 'svgmin'] );
