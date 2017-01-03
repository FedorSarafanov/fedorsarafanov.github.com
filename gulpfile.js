var gulp = require('gulp'),  
	refresh 	 = require('gulp-livereload'),   //Перезагрузка при вызове refresh(nameserver)
	webserver    = require('gulp-webserver'),    //Сервер локалхоста
	concat       = require('gulp-concat'),       //Объединяет файлы в один
	minifyCSS    = require('gulp-minify-css'),   //Сжимает, оптимизирует
	less         = require('gulp-less'),         //Less
	rename       = require("gulp-rename");       //Переименование
	autoprefixer = require('less-plugin-autoprefix'), // Автопрефиксер свойств для старых браузеров
    autoprefix   = new autoprefixer({browsers: ["last 5 versions"]}); //Свойства для браузеров от 2010 года	
 
gulp.task('server', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      port: 5671,
      open: false
    })); 
});

gulp.task('styles', function () {
	gulp.src('./styles/main.less')
		.pipe(less({plugins: [autoprefix]}))
		.pipe(concat('main.css'))
		.pipe(minifyCSS())   
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest('./styles'));
});

gulp.task('reload', function () {
	gulp.start('styles');
	gulp.src('./').pipe(refresh(webserver));	   	
	console.log('[sfedor-g] Сервер обновлён.');	
});

gulp.task('start', function () {
	gulp.start('server');
    gulp.start('styles');
});

gulp.task('default', ['start'], function() {  
	gulp.watch(["./*.html","./styles/*"], ['reload']);    
});