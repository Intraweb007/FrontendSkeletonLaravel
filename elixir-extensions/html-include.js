var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var fileinclude = require('gulp-file-include');

var Task = Elixir.Task;

Elixir.extend('htmlInclude', function() {
    new Task('htmlInclude', function() {
        return gulp.src(["./resources/assets/template/html/*.html", "!./resources/assets/template/html/includes/*.html"])
            .pipe(fileinclude({
                prefix: '@@',
                basepath: "./resources/assets/template/html/includes"
            }))
            .pipe(gulp.dest("./public/template"));
    }).watch('./resources/assets/template/html/**/*.html');
});
