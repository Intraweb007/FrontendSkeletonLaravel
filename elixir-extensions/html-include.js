const gulp = require('gulp');
const Elixir = require('laravel-elixir');
const fileinclude = require('gulp-file-include');
const config = require('config');

const Task = Elixir.Task;

Elixir.extend('htmlInclude', function() {
    new Task('htmlInclude', function() {
        return gulp.src(config.get('html.source'))
            .pipe(fileinclude({
                prefix: '@@',
                basepath: config.get('html.includesSource')
            }))
            .pipe(gulp.dest(config.get('html.target')));
    }).watch(config.get('html.watch'));
});
