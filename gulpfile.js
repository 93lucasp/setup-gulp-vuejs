var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    browserSync = require('browser-sync').create(),
    fs = require("fs"),
    browserify = require('browserify'),
    vueify = require('vueify');

gulp.task('vue', function() {
    browserify('./src/assets/js/view/main.js')
        .transform(vueify)
        .bundle()
        .pipe(fs.createWriteStream("./public/bundle.js"))
});

gulp.task('html', function() {
    return gulp.src('./src/*.html')

    .pipe(gulp.dest('./public'));
});
// open server on port 3000
gulp.task('serve', function() {
    browserSync.init({
        open: false,
        reloadDelay: 1000,
        server: {
            baseDir: "./src"
        }
    });
});


gulp.task('default', gulpSequence('serve', 'vue', 'html'));