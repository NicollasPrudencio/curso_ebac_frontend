const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeJavascript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function comprimeImagens(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function compilarSASS(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

exports.sass = compilarSASS;
exports.images = comprimeImagens;
exports.javascript = comprimeJavascript;

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilarSASS));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavascript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}

// Processando tarefas em serie
// exports.default = gulp.series(funcao_aqui)