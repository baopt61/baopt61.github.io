var gulp = require('gulp');
 
// Include Our Plugins
var less = require('gulp-less');

// Minify js
var uglify = require('gulp-uglify');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var cleanCSS    = require('gulp-clean-css');
 
// Compile less
gulp.task('less', function () {
    return gulp.src('./less_evn_cskh/combine.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./css/'))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./css/'));
});

// Complile js
gulp.task('scripts', function() {
    return gulp.src([
		'./js/jquery.min.js',
        './js/popper.min.js',
        './js/bootstrap.min.js',
        './js/slick.min.js',
		'./js/main.js',
	])
	.pipe(concat('main.js'))
	.pipe(rename('main.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./js/'));
});
 
// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(['./less_evn_cskh/**/*'], gulp.series('less'));
    gulp.watch('./js/main.js', gulp.series('scripts'));
});

 
// Default Task
gulp.task('default', gulp.series('less', 'watch', 'scripts'));