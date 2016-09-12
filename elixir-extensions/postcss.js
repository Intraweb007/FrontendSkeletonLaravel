const gulp = require('gulp');
const Elixir = require('laravel-elixir');
const postcss = require('gulp-postcss');
const config = require('config');
const rename = require("gulp-rename");

const Task = Elixir.Task;

Elixir.extend('postCSS', function () {
    new Task('postCSS', function () {
        var processors = [
            require("postcss-import"),
            require('lost'),
            require('postcss-simple-vars'),
            require('postcss-mixins'),
            require('postcss-nested'),
            require('csstyle'),
            require('autoprefixer'),
            require('cssnano')
        ];

        return gulp.src(config.get('postcss.source'))
            .pipe(postcss(processors))
            .pipe(rename("main.css"))
            .pipe(gulp.dest(config.get('postcss.target')));
    }).watch(config.get('postcss.watch'));
});
