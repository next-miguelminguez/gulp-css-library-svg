"use strict";

// more info:
// https://github.com/svg/svgo/tree/master/plugins

var config   = require('./config.json');
var gulp     = require('gulp');

var path     = require('path');
var svgmin   = require('gulp-svgmin');
var svgo     = require('gulp-svgo');
var replace  = require('gulp-replace');


gulp.task('default', function () {
  return gulp
    .src( config.src + '/*.svg' )
    // .pipe(svgo())
    //.pipe(svgmin())
    .pipe( gulp.dest(config.dest) );
});
