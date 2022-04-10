"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const webpackConfig = require('../webpack.config');
const bundler = webpack(webpackConfig);

gulp.task("serve", () => {
    browsersync.init({
        server: "./dist/",
        port: 4000,
        watch  : true,
        middleware: [
            webpackDevMiddleware(bundler, {
                publicPath: webpackConfig.output.publicPath,
                stats: { colors: true }
            }),
            webpackHotMiddleware(bundler)
        ]
    });

    gulp.watch(paths.views.watch, gulp.parallel("views"));
    // gulp.watch(paths.styles.watch, gulp.parallel("styles"));
    gulp.watch(paths.styles.watch).on('change', (err)=>{
        gulp.watch(paths.styles.watch, gulp.parallel("styles"));
    });
    gulp.watch(paths.scripts.watch, gulp.parallel("scripts"));
    // gulp.watch(paths.sprites.watch, gulp.parallel("sprites"));
    gulp.watch(paths.images.watch, gulp.parallel("images"));
    // gulp.watch(paths.fonts.watch, gulp.parallel("fonts"));
});

