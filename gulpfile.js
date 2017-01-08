var gulp = require('gulp'),  
	refresh 	 = require('gulp-livereload'),   //Перезагрузка при вызове refresh(nameserver)
	webserver    = require('gulp-webserver'),    //Сервер локалхоста
	concat       = require('gulp-concat'),       //Объединяет файлы в один
	minifyCSS    = require('gulp-minify-css'),   //Сжимает, оптимизирует
	less         = require('gulp-less'),         //Less
	rigger 		 = require('gulp-rigger'),
	run 		 = require('gulp-run'),
	rename       = require("gulp-rename");       //Переименование
	autoprefixer = require('less-plugin-autoprefix'), // Автопрефиксер свойств для старых браузеров
    autoprefix   = new autoprefixer({browsers: ["last 3 versions"]}); //Свойства для браузеров от 2010 года	
 
var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: './',
        js: 'js/',
        css: 'css/',
        img: {
        	sprites: 'img/sprites/',
        	problems: 'img/problems/',
        	screenshots: 'img/screenshots/'
        },
        fonts: 'font/',
        article: 'article/'
    },
    sync:{ //Синхронизируемые папки
		sprites: '/src/img/sprites/',
		problems: '/src/img/problems/',
		screenshots: '/src/img/screenshots/',
		fonts: '/src/font/'
	},
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        index: 'src/index.html',
        js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'src/less/**/*.less',
        fonts: 'src/font/**/*.*',
        article: 'src/article/**/*.html'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/*.html',
        article: 'src/article/*.html',
        js: 'src/js/**/*.js',
        style: 'src/less/**/*.less',
        fonts: 'src/fonts/**/*.*'
    }
}

gulp.task('article:rebase', function() {
    run('cd src && bash gen.sh').exec();
})


gulp.task('server', function() {
  gulp.src(path.build.html)
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      port: 5671,
      open: false
    })); 
});


gulp.task('reload-server', function () {
	gulp.src(path.build.html).pipe(refresh(webserver));
	console.log('[sfedor-g] Сервер обновлён.');	
})


gulp.task('html:build', ['reload-server'], function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
})

gulp.task('article:build', ['reload-server'], function () {
    gulp.src(path.src.article)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.article));
    gulp.src(path.src.index)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));    	
})


gulp.task('less:build', ['reload-server'], function () {
	gulp.src(['src/less/main.less'])
		.pipe(less({plugins: [autoprefix]}))
		// .pipe(concat('main.css'))
		.pipe(minifyCSS())   
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest(path.build.css));
})


gulp.task('default', ['server'], function() {
	gulp.watch(
		[	path.watch.html, 
			path.watch.js, 
			path.watch.fonts
		], 
		['reload-server']);
	gulp.watch(
		[path.watch.style],
		['less:build']);
	gulp.watch(
		[path.watch.article],
		['article:rebase']);	
	gulp.watch(
		[path.watch.html],
		['html:build']);	
})

gulp.task('production',['html:build','article:build','less:build']);