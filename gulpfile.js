var gulp = require('gulp'),  
	refresh         = require('gulp-livereload'),   // Перезагрузка при вызове refresh(nameserver)
	webserver       = require('gulp-webserver'),    // Сервер локалхоста
	concat          = require('gulp-concat'),       // Объединяет файлы в один
	minifyCSS       = require('gulp-minify-css'),   // Сжимает, оптимизирует
	less            = require('gulp-less'),         // Less
	rigger          = require('gulp-rigger'),       // Замена в файлах    
	rename          = require("gulp-rename");       // Переименование
	autoprefixer    = require('less-plugin-autoprefix'), // Автопрефиксер свойств для старых браузеров
    autoprefix      = new autoprefixer({browsers: ["last 3 versions"]}), //Свойства для браузеров от 2010 года	
    dom             = require('gulp-dom'),          // Работа с распарсенным html
    cache           = require('gulp-cached'),       // Обработка только modified файлов
    runSequence     = require('run-sequence');      // Последовательные task-и
    sort            = require('gulp-sort'),         // Сортировка файлов в gulp.src
    paths           = require('path'),              // Получение basename         
    util            = require('util'),              // .inspect (для получения даты)
    fs              = require('fs'),                // Работа с файловой системой
    markdown        = require('gulp-markdown'),
    jsonfile        = require('jsonfile');          // Работа c json

var config = {
    path: {
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
            html: 'src/*.html',
            index: 'src/index.html',
            js: 'src/js/main.js',
            style: 'src/less/*.less',
            fonts: 'src/font/**/*.*',
            article: ['src/article/**/*.html','src/article/**/*.md'],
            template: 'src/template/'
        },
        watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
            html: 'src/*.html',
            article: ['src/article/**/*.html','src/article/**/*.md'],
            js: 'src/js/**/*.js',
            style: 'src/less/**/*.less',
            fonts: 'src/fonts/**/*.*'
        }
    },
    date: {
        options: { 
            year: 'numeric',
            month: 'long',
            day: 'numeric' 
        }
    },
    files: {
        index: 'src/index.html',
        cache: 'cache.json',
        articles: 'articles.html',
        linux: 'linux.html'
    },
    server: {
      livereload: true,
      directoryListing: false,
      port: 5671,
      open: false
    },
    templates: {
        article: "<header><time class='datetime'>{date}</time><h1>{href}</h1></header><article>{text}</article>"
    }
}

jsonfile.readFile(config.files.cache, function(err, obj) {
  cache.caches=obj;
})

gulp.task('article:rebase', function() {
    return gulp.src(config.path.src.article)
        .pipe(sort({// Сортировка: сначала новые
                comparator: function(file1, file2) {
                    var stats1 = fs.statSync(file1.path),
                        stats2 = fs.statSync(file2.path);
                    var time1 = new Date(util.inspect(stats1.mtime)),
                        time2 = new Date(util.inspect(stats2.mtime));
                    if (time1<time2) {
                        return 1;
                    }
                    if (time1>time2) { 
                        return -1;
                    }
                    return 0;
                }
        }))
        .pipe(markdown())
        .on('data', function(file) {
            var filePath    =   paths.basename(file.path);
            // console.log(file.path)
            var stats       =   fs.statSync(file.path);
            var date        =   new Date(util.inspect(stats.mtime)).toLocaleString('en-US',config.date.options);
            var contents    =   String(file.contents);
            var title       =   /<h1>(.|\n)*<\/h1>/igm.exec(contents)[0];
                title       =   title.replace('<h1>','').replace('</h1>','');
            var desc        =   /<!--d-->(.|\n)*<!--ed-->/igm.exec(contents)[0];
            var href        =   "<a href='{0}'>{1}</a>"
                                .replace('{0}',config.path.build.article+filePath)
                                .replace('{1}',title);
            contents        =   config.templates.article;
            contents        =   contents.replace('{date}',date).replace('{href}',href).replace('{text}',desc);
            file.contents = new Buffer(contents);
            return file;
        }) 
        .pipe(concat(config.files.articles))
        .pipe(gulp.dest(config.path.src.template))
});


gulp.task('article:compile', function() {
    return gulp.src(config.path.src.article)
        .pipe(cache('article'))
        .pipe(markdown())
        .on('data', function(file) {
            jsonfile.writeFile(config.files.cache, cache.caches, function (err) {})

            var filePath    =   paths.basename(file.path);
            // console.log(file.path)
            var stats       =   fs.statSync(file.path);
            var date        =   new Date(util.inspect(stats.mtime)).toLocaleString('en-US',config.date.options);
            var contents    =   String(file.contents);
            var title       =   /<h1>(.|\n)*<\/h1>/igm.exec(contents)[0];
                title       =   title.replace('<h1>','').replace('</h1>','');

            var tag         =   /<!--tags:(.*)-->/igm.exec(contents)[1];
            var text        =   /<!--d-->(.|\n)*/igm.exec(contents)[0];
            var href        =   "<a href='{0}'>{1}</a>"
                                .replace('{0}',filePath)
                                .replace('{1}',title);
            contents        =   config.templates.article;
            contents        =   contents.replace('{date}',date).replace('{href}',href).replace('{text}',text);
            var html        =   fs.readFileSync(config.path.src.template+'article.html', 'utf8');
            html            =   html.replace('{title}',title).replace('{text}',contents);
            file.contents   =   new Buffer(html);
            return file;
        })
        .pipe(rigger())
        // .pipe(rename(function (path) {
        //     path.extname = ".html"
        // }))
        .pipe(gulp.dest(config.path.build.article));
});


gulp.task('article:build', function() {
    runSequence(['article:compile','article:rebase'],'html:build');
    gulp.src(config.files.index)
        .pipe(rigger())
        .pipe(gulp.dest(config.path.build.html));      
})

gulp.task('server', function() {
  gulp.src(config.path.build.html)
    .pipe(webserver(config.server)); 
});

gulp.task('reload-server', ['html:build','less:build','article:build'], function () {
	gulp.src(config.path.build.html).pipe(refresh(webserver));
	console.log('[sfedor-g] Сервер обновлён.');	
})


gulp.task('html:build', function () {
    gulp.src(config.path.src.html) 
        .on('data', function(file) {console.log(file.path)})
        .pipe(rigger())
        .pipe(gulp.dest(config.path.build.html));
})


gulp.task('less:build', function () {
	gulp.src(['src/less/main.less'])
		.pipe(less({plugins: [autoprefix]}))
		// .pipe(concat('main.css')) 
		.pipe(minifyCSS())   
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest(config.path.build.css));
})


gulp.task('default', ['server'], function() {
	gulp.watch(
		[	config.path.watch.html, 
			config.path.watch.js, 
			config.path.watch.fonts
		], 
		['reload-server']);
	gulp.watch(
		[config.path.watch.style],
		['less:build']);
	gulp.watch(
		[config.path.watch.article],
		['article:build']);	
	gulp.watch(
		[config.path.watch.html],
		['html:build']);	
})

// gulp.task('production',['html:build','article:build','less:build']);