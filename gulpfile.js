var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var run = require('gulp-run');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminZopfli = require('imagemin-zopfli');
var imageminMozjpeg = require('imagemin-mozjpeg'); //need to run 'brew install libpng'
var imageminGiflossy = require('imagemin-giflossy');
var imageResize = require('gulp-image-resize');
 

gulp.task('compress-js', function (cb) {
  pump([
        gulp.src('js/**/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
  pump([
        gulp.src('modules/**/*.js'),
        uglify(),
        gulp.dest('dist/modules')
    ],
    cb
  );
});

gulp.task('css', function(){
  return gulp.src('css/*.css')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('font', function(){
  return gulp.src('fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'))
});

//compress all images
gulp.task('imagemin', function() {
    return gulp.src(['images/about/*.{gif,png,jpg}'])
        .pipe(imagemin([
            //png
            imageminPngquant({
                speed: 1,
                quality: 98 //lossy settings
            }),
            imageminZopfli({
                more: true
            }),
            // gif
            // imagemin.gifsicle({
            //     interlaced: true,
            //     optimizationLevel: 3
            // }),
            //gif very light lossy, use only one of gifsicle or Giflossy
            imageminGiflossy({
                optimizationLevel: 3,
                optimize: 3, //keep-empty: Preserve empty transparent frames
                lossy: 2
            }),
            //svg
            imagemin.svgo({
                plugins: [{
                    removeViewBox: false
                }]
            }),
            //jpg lossless
            imagemin.jpegtran({
                progressive: true
            }),
            //jpg very light lossy, use vs jpegtran
            imageminMozjpeg({
                quality: 90
            })
        ]))
        .pipe(gulp.dest('dist/images/about/'));
});

gulp.task('imageresize', function () {
  return gulp.src(['dist/images/about/*.{gif,png,jpg}'])
    .pipe(imageResize({
      width : 1200,
      upscale : false
    }))
    .pipe(gulp.dest('dist/images/about/'));
});

//compress all images
gulp.task('imagecompress', function() {
    return gulp.src(['dist/images/portfolio/staffany_design/*.{gif,png,jpg}'])
        .pipe(imagemin([
            //png
            imageminPngquant({
                speed: 1,
                quality: 98 //lossy settings
            }),
            imageminZopfli({
                more: true
            }),
            // gif
            // imagemin.gifsicle({
            //     interlaced: true,
            //     optimizationLevel: 3
            // }),
            //gif very light lossy, use only one of gifsicle or Giflossy
            imageminGiflossy({
                optimizationLevel: 3,
                optimize: 3, //keep-empty: Preserve empty transparent frames
                lossy: 2
            }),
            //svg
            imagemin.svgo({
                plugins: [{
                    removeViewBox: false
                }]
            }),
            //jpg lossless
            imagemin.jpegtran({
                progressive: true
            }),
            //jpg very light lossy, use vs jpegtran
            imageminMozjpeg({
                quality: 90
            })
        ]))
        .pipe(gulp.dest('dist/images/portfolio/staffany_design/'));
});

gulp.task('default', [ 'compress-js', 'css', 'font', 'imagemin']); 