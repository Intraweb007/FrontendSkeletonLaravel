process.env.NODE_CONFIG_DIR = './';
process.env.NODE_ENV = 'production';

const elixir = require('laravel-elixir');
const config = require('config');

require('laravel-elixir-vue');
require('./elixir-extensions/html-include');
require('./elixir-extensions/postcss');
require('./elixir-extensions/uglify');

Elixir.config.browserSync = {
    reloadOnRestart: true,
    notify: true
};

Elixir.config.css.autoprefix.enabled = false;
Elixir.config.sourcemaps = false;

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
    mix.browserSync({
            server: {
                baseDir: config.get('browsersync.baseDir')
            },
            files: config.get('browsersync.watch')
        })
        .htmlInclude()
        .webpack(
            config.get('webpack.source'),
            config.get('webpack.target')
        )
        .styles(config.get('css.source'), config.get('css.target'))
        .scripts(config.get('scripts.source'), config.get('scripts.target'))
        .uglifyJS()
        .postCSS();
});
