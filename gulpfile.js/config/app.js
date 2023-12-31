const recompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const pugbem = require('gulp-pugbem');
const isProd = process.argv.includes('--production');
const isDev = !isProd;

module.exports = {
	isProd: isProd,
	isDev: isDev,


	webpack: {
		mode: isProd ? 'production' : 'development',
		entry: {
			main: './#src/js/main.js',
			app: './#src/js/app.js'
		},
	},
	pug: {
		pretty: isDev,
		plugins: [pugbem],
	},
	htmlMin: {
		collapseWhitespace: isProd,
	},
	js: {
		ext: {
			src: '.js',
			min: '.min.js'
		}
	},
	renameScss: {
		extname: '.css',
		suffix: '.min',
	},
	fonter: {
		formats: ['woff', 'ttf', 'svg', 'otf'],
	},
	autoprefixer: {
		cascade: false,
		grid: 'auto-place',
		overrideBrowserslist: [
			'last 3 versions',
			// 'Android >= 5',
			// 'Firefox >= 24',
			// 'Safari >= 6',
			// 'Opera >= 12',
		],
	},
	imagemin: {
		verbose: true,
		interlaced: true,
		progressive: true,
		optimizationLevel: 5,
	}[
		recompress({
			loops: 6,
			min: 50,
			max: 90,
			quality: 'high',
			use: [
				pngquant({
					quality: [0.8, 1],
					strip: true,
					speed: 1,
				}),
			],
		})
	],
};
