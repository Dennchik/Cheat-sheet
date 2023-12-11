global.$ = {
	//* Plugins
	gulp: require('gulp'),
	gul: require('gulp-load-plugins')(),
	browserSync: require('browser-sync').create(),
	sass: require('gulp-sass')(require('sass')),
	webpack: require('webpack-stream'),
	gulpIf: require('gulp-if'),
	del: require('del'),
	fs: require('fs'),
	//* Configuration
	path: require('./config/path'),
	app: require('./config/app'),
};
//* Tasks
const requireDir = require('require-dir');
const fontsStyle = require('./task/fontStyle');
const task = requireDir('./task', { recurse: true });
const change = $.gulp.series(task.clearFonts, task.fonts, fontsStyle);
//* Observation
const watcher = () => {
	$.gulp.watch($.path.js.watch, task.js).on('all', $.browserSync.reload);
	$.gulp.watch($.path.pug.watch, task.pug).on('all', $.browserSync.reload);
	$.gulp.watch($.path.json.watch, task.pug).on('all', $.browserSync.reload);
	$.gulp.watch($.path.scss.watch, task.scss).on('all', $.browserSync.reload);
	$.gulp.watch($.path.fonts.watch, task.fonts).on('all', $.browserSync.reload);
	$.gulp.watch($.path.image.watch, task.image).on('all', $.browserSync.reload);
	$.gulp.watch($.path.fontsStyle.watch, change).on('all', $.browserSync.reload);
};
const end = $.gulp.series(
	task.clear,
	$.gulp.parallel(task.pug, task.scss, task.image, task.js, task.fonts),
	fontsStyle,
);
const dev = $.gulp.series(end, $.gulp.parallel(watcher, task.server));
//* Call
exports.clear = task.clear;
exports.clearEnd = task.clearEnd;
exports.clearFonts = task.clearFonts;
exports.pug = task.pug;
exports.scss = task.scss;
exports.js = task.js;
exports.image = task.image;
exports.fonts = task.fonts;
exports.final = task.final;
exports.fontsStyle = fontsStyle;
exports.watch = watcher;
//* Assembling
exports.default = $.app.isProd ? end : dev;
exports.final = $.gulp.series(task.clearEnd, task.final);