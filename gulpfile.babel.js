"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./#src/views/**/*.html",
                "./#src/views/pages/*.html"
            ],
            dist: "./dist/",
            watch: [
                "./#src/blocks/**/*.html",
                "./#src/views/**/*.html"
            ]
        },
        styles: {
            src: "./#src/styles/main.{scss,sass}",
            dist: "./dist/styles/",
            watch: [
                "./#src/blocks/**/*.{scss,sass}",
                "./#src/styles/**/*.{scss,sass}"
            ]
        },
        scripts: {
            src: "./#src/js/index.js",
            dist: "./dist/js/",
            watch: [
                "./#src/blocks/**/*.js",
                "./#src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./#src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./#src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/img/",
            watch: "./#src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}"
        },
        sprites: {
            src: "./#src/img/svg/*.svg",
            dist: "./dist/img/sprites/",
            watch: "./#src/img/svg/*.svg"
        },
        fonts: {
            src: "./#src/fonts/**/*.{woff,woff2}",
            dist: "./dist/fonts/",
            watch: "./#src/fonts/**/*.{woff,woff2}"
        },
        favicons: {
            src: "./#src/img/favicon/*.{jpg,jpeg,png,gif}",
            dist: "./dist/img/favicons/",
        },
        gzip: {
            src: "./#src/.htaccess",
            dist: "./dist/"
        },
        setEnv(){
            this.isProd = process.argv.includes('--production');
            this.isDev = !this.isProd;
        }
    };

requireDir("./gulp-tasks/");
paths.setEnv();
export const build = () => {
    console.log(paths.isProd)
}

export const watch = () => {
    console.log(paths.isProd)
}

export { paths }; 

export const dev = gulp.series("clean","smart-grid",
    gulp.parallel(["views", "styles","scripts", "images"]),
    gulp.parallel("serve")
)

// export const prod = gulp.series("clean",
//     gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons", "gzip"]));

export default dev;
