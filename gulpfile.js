var gulp = require('gulp');
concatCSS = require('gulp-concat-css');
rename = require('gulp-rename');
minifyCSS = require('gulp-minify-css');
autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
    gulp.src('css/*.css')
        .pipe(concatCSS("styles.css"))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('css'))
})