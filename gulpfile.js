var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var run = require('gulp-run');

gulp.task('compress-js', function (cb) {
  pump([
        gulp.src('js/**/*.js'),
        uglify(),
        gulp.dest('dist/js')
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



gulp.task('default', [ 'compress-js', 'css']); 