"use strict";

// more info:
// https://github.com/svg/svgo/tree/master/plugins

var config   = require('./config.json');
var gulp     = require('gulp');

var path     = require('path');
var fs       = require('fs');

var svgmin   = require('gulp-svgmin');
var replace  = require('gulp-replace');
var rename   = require("gulp-rename");


gulp.task('svgmin', function () {
  return gulp
    .src( config.src + '/*.svg' )

    .pipe( replace(' id=', ' class=') )
    //.pipe( replace('<?','<?xml-stylesheet type="text/css" href="../../src/init.css"?><?') )/* alternative CSS */
    .pipe( svgmin({
      // js2svg: {
      //   pretty: true
      // },
      plugins: [
        { removeDimensions:      true  },
        { removeViewBox:         false },
        { convertStyleToAttrs:   false }
      ]
    }) )
    // .pipe( replace('<!--Generator: Sketch 52.4 (67378) - http://www.bohemiancoding.com/sketch-->', clip))
    .pipe( rename({
      suffix: "-min",
      extname: ".svg"
    }) )
    .pipe( gulp.dest(config.dest+"/svg/") );
});

gulp.task('copy-css', function(){
  gulp.src(['./src/css/**/*']).pipe(gulp.dest(config.dest + '/css/'));
});

gulp.task('demo', ['svgmin'], function() {
  var svgContent = fs.readFileSync(config.dest +"/svg/"+ "next-svg" +'-min.svg', "utf8");
  var svgMicro = fs.readFileSync(config.dest +"/svg/"+ "micro" +'-min.svg', "utf8");
  
  return gulp
    .src( config.demo )
    .pipe( replace('<!-- micro -->', svgMicro) )
    .pipe( replace('<!-- replace -->', svgContent) )
    .pipe( gulp.dest(config.dest + "/demo/") );
});

gulp.task('usecase', ['svgmin'], function () {


  return gulp
    .src( config.demo )

    .pipe( gulp.dest(config.dest + "/demo/") );
});


gulp.task('default', ['demo', 'copy-css'] );



// Atajo: se crea en el archivo clip.svg una forma o mascara que se inserta dentro del SVG en el comentario.
// Con CSS asignamos la mascara al elemento del SVG que nos interese.
//
// Ejemplos:
//  * basic https://css-tricks.com/clipping-masking-css/
//  * top  https://codepen.io/yoksel/full/fsdbu/
//
// var clip = fs.readFileSync('./src/assets/clip.svg', "utf8");
//
// gulp.task('svg-mask', function () {
//   return gulp
//     .src( config.src + '/*.svg' )
//     .pipe( replace('<!-- Generator: Sketch 52.4 (67378) - http://www.bohemiancoding.com/sketch -->', clip))
//     .pipe( gulp.dest(config.dest) );
// });

// Alternative para incluir css
// <defs>
//   <link href="../../src/init.css" type="text/css" rel="stylesheet"
//           xmlns="http://www.w3.org/1999/xhtml"/>
// </defs>
