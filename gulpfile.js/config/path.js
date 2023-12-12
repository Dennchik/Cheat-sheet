const pathSrc = './#src';
const pathDest = './build';
const pathEnd = './public';


module.exports = {
	root: pathDest,
	rootEnd: pathEnd,

	json: {
		watch: pathSrc + '/data/**/*.json',
	},
	pug: {
		src: pathSrc + '/pug/pages/**/*.pug',
		watch: pathSrc + '/pug/**/*.pug',
		dest: pathDest,
	},
	scss: {
		src: pathSrc + '/scss/*.{sass,scss}',
		watch: pathSrc + '/scss/**/*.{sass,scss}',
		dest: pathDest + '/css',
	},
	js: {
		src: pathSrc + '/js/*.js',
		watch: pathSrc + '/js/**/*.js',
		dest: pathDest + '/js',
	},
	image: {
		src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg,ico}',
		watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg,ico}',
		dest: pathDest + '/img/',
	},
	fonts: {
		src: pathSrc + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		dest: pathDest + '/fonts',
	},
	fontsStyle: {
		src: pathSrc + '/scss/core/_fonts.scss',
		watch: pathSrc + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		dest: pathDest + '/fonts',
	},
	clearFonts: {
		watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
	},
	final: {
		src: pathDest + '/**/*.*',

		dest: pathEnd,
	}
};
