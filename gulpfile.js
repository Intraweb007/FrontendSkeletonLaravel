const elixir = require('laravel-elixir');
const postStylus = require('poststylus');
const rupture = require('rupture');

require('laravel-elixir-vue');
require('./elixir-extensions/html-include');

elixir.config.browserSync = {
    reloadOnRestart: true,
    notify: true
};

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.stylus('./resources/assets/template/stylus/bootstrap.styl', './public/template/css/main.css', {
        use: [rupture(), postStylus(['lost'])]
    })
        .browserSync({
            server: {
                baseDir: "./public/template"
            },
            files: "./public/template/**/*.*"
        })
        .htmlInclude()
        .webpack(
            './resources/assets/template/js/app.js',
            './public/template/js/main.js'
        )
        .styles('./resources/assets/template/css/*.css', 'public/template/css/vendor.css')
        .scripts('./resources/assets/template/js/vendor/*.js', 'public/template/js/vendor.js');
});
