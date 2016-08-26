process.env.NODE_CONFIG_DIR = './';
process.env.NODE_ENV = 'production';

const elixir = require('laravel-elixir');
const postStylus = require('poststylus');
const rupture = require('rupture');
const config = require('config');

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
    mix.stylus(config.get('stylus.source'), config.get('stylus.target'), {
        use: [rupture(), postStylus(['lost'])]
    })
        .browserSync({
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
        .scripts(config.get('scripts.source'), config.get('scripts.target'));
});
