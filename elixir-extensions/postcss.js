const gulp = require('gulp');
const Elixir = require('laravel-elixir');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const config = require('config');

const Task = Elixir.Task;

Elixir.extend('postCSS', function () {
    new Task('postCSS', function () {
        var processors = [
            autoprefixer(),
            cssnano()
        ];

        return gulp.src(config.get('postcss.source'))
            .pipe(postcss(processors))
            .pipe(gulp.dest(config.get('postcss.target')));
    }).watch(config.get('postcss.watch'));
});
