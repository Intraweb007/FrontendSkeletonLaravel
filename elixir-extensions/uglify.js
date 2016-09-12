const gulp = require('gulp');
const Elixir = require('laravel-elixir');
const uglify = require('gulp-uglify');
const config = require('config');

const Task = Elixir.Task;

Elixir.extend('uglifyJS', function () {
    new Task('uglifyJS', function () {
        if (!config.get('uglify.enable')) {
            return gulp.src(config.get('uglify.source')).pipe(gulp.dest(config.get('uglify.target')));
        }

        return gulp.src(config.get('uglify.source'))
            .pipe(uglify())
            .pipe(gulp.dest(config.get('uglify.target')));
    }).watch(config.get('uglify.watch'));
});
