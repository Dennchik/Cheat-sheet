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
	},
	pugMin: {
		pretty: isDev,
		plugins: [pugbem],
		data: {
			news: require('../../#src/data/news.json')
		},
	},
	htmlMin: {
		collapseWhitespace: isProd,
	},
	minJs: {
		ext: {
			src: '.js',
			min: '.min.js'
		}
	},
	renameScss: {
		extname: '.css',
		suffix: '.min',
	},
	renameJs: {
		extname: '.js',
		suffix: '.min',
	},
	fonter: {
		formats: ['woff', 'ttf', 'eot', 'svg', 'otf'],
	},
	autoprefixer: {
		cascade: false,
		grid: 'auto-place',
		overrideBrowserslist: [
			'Android >= 5',
			'last 2 versions',
			'Firefox >= 24',
			'Safari >= 6',
			'Opera >= 12',
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
