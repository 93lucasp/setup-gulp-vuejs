var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    browserSync = require('browser-sync').create(),
    fs = require("fs"),
    browserify = require('browserify'),
    vueify = require('vueify'),
    gulpPath = require('gulp-path'),
    uglify = require('gulp-uglify'),
    rimraf = require('gulp-rimraf'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    pump = require('pump'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require("gulp-sourcemaps"),
    postcss = require('gulp-postcss'),
    inject = require('gulp-inject'),
    jsVendors = require('./package.json').jsDependecies;


gulp.task('sass', function() {
    return gulp.src("./src/assets/css/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('css', function() {
    return gulp.src('./src/assets/css/main.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([require('precss'), require('autoprefixer')]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/assets/css'));
});
gulp.task('css-min', function() {
    return gulp.src('./src/assets/css/main.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename(function(path) {
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('./public/assets/css'));
});
gulp.task('css-min-vendors', function() {
    return gulp.src('./src/assets/css/vendors.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename(function(path) {
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('./public/assets/css'));
});
gulp.task('js-vendors', function() {
    var vendors = Object.keys(jsVendors).map(function(name) {
        return name + '/' + jsVendors[name];
    });
    return gulp.src(vendors, { cwd: './node_modules' })
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest('public/assets/js'));
});

gulp.task('js-min', function() {
    return gulp.src(['./src/assets/js/**/*.js', '!./src/assets/js/view/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.extname = ".min.js";
        }))
        .pipe(gulp.dest('./public/assets/js/'));
});

gulp.task('images', function() {
    gulp.src('./src/assets/images/**/*').pipe(gulp.dest('./public/assets/images'));
});


gulp.task('vue', function() {
    browserify('./src/assets/js/view/main.js')
        .transform(vueify)
        .bundle()
        .pipe(fs.createWriteStream("./public/assets/js/vue-compiled.js"))
});

gulp.task('html', function() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./public'));
});

gulp.watch("./src/**/*.html", ['html']).on('change', browserSync.reload);
gulp.watch("./src/assets/css/**/*.scss", ['sass']);
gulp.watch("./src/assets/css/**/*.css", ['css-min']).on('change', browserSync.reload);
gulp.watch("./src/assets/js/**/*.js", ['js-min']).on('change', browserSync.reload);
gulp.watch("./src/assets/js/**/*.vue", ['vue']).on('change', browserSync.reload);

// open server on port 3000
gulp.task('serve', function() {
    browserSync.init({
        open: false,
        reloadDelay: 1000,
        server: {
            baseDir: "./public"
        }
    });
});


gulp.task('default', gulpSequence('sass', 'css', 'css-min', 'css-min-vendors', 'js-min', 'js-vendors', 'vue', 'images', 'html', 'serve'));