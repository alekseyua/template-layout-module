"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";
/*плагины для работы с шрифтами*/
import	ttf2woff from 'gulp-ttf2woff';
import	ttf2woff2 from 'gulp-ttf2woff2';
import	fonter from 'gulp-fonter';
import fs from 'fs';

gulp.task("fonts", () => {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dist))
        .pipe(debug({
            "title": "Fonts"
        }));
});

/*==================================================================================*/
			/*функция создания шрифтов для верстки*/
/*	
	100: Thin;
	200: Extra Light (Ultra Light);
	300: Light;
	400: Normal;Regular;
	500: Medium;
	600: Semi Bold (Demi Bold);
	700: Bold;
	800: Extra Bold (Ultra Bold);
	900: Black (Heavy).
*/


			function createTtf2woff() {
						 src(paths.fonts.src)
						.pipe(ttf2woff())
						.pipe(dest(paths.fonts.dist))
				return src(paths.fonts.src)
						.pipe(ttf2woff2())
						.pipe(dest(paths.fonts.dist))
			}

			gulp.task('createOtf2ttf', async () => {
                fs.access(paths.fonts.otp, await function(error){
console.log('first',paths.fonts.otp)
                    if (error) {
                        console.log("Файл не найден");
                    } else {
                        console.log("Файл найден");
                    }
                })
            }
            );


				// return src(paths + "/fonts/*.otf")
				// 		.pipe(fonter({
				// 			formats : ['ttf']
				// 		}))
				// 		.pipe(dest(paths + "/fonts/"))


/*==================================================================================*/
			/*надо решить проблему с функциями асинхронности*/
			/*создание файла _fonts.scss*/
			function creatFile() {
				return fs.open(path_src + '/scss/_fonts.scss', 'w', (err) => {
			        if(err) throw err;
			        console.log('File created');
			   });
			}
			/*функция для подключения стилей к файлу css*/
			function fontsStyle() {
				let file_content = fs.readFileSync(path_src + '/scss/_fonts.scss', cb);
				if (file_content == '') {
					fs.writeFile(path_src + '/scss/_fonts.scss', '', cb);
					return fs.readdir(path.upload.fonts, function (err, items) {
						console.log(items)
						if (items) {
							let c_fontname;
							for (var i = 0; i < items.length; i++) {
								let fontname = items[i].split('.');
								fontname = fontname[0];
								console.log(c_fontname != fontname);
								if (c_fontname != fontname) {
									fs.appendFile(path_src + '/scss/_fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
									c_fontname = fontname;															
								}
								
							}
						}
					})
				}
			     console.log('File complate');
			}
			function cb() { }