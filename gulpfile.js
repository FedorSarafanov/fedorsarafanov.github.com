var config = {
    path: {
        build: { 
            html: './',
            js: 'js/',
            css: 'css/',
            img: {
                sprites: 'img/sprites/',
                problems: 'img/problems/',
                images: 'img/',
                screenshots: 'img/screenshots/'
            },
            fonts: 'font/',
            article: 'article/'
        },
        sync:{ 
            sprites: '/src/img/sprites/',
            problems: '/src/img/problems/',
            screenshots: '/src/img/screenshots/',
            fonts: '/src/font/'
        },

        src: { 
            html: 'src/*.html',
            index: 'src/index.html',
            problems: 'src/problems.html',
            js: 'src/js/main.js',
            style: 'src/less/*.less',
            fonts: 'src/font/**/*.*',
            article: 'src/article/*.html',
            template: 'src/template/'
        },
        watch: {
            html: 'src/*.html',
            article: 'src/article/*.html',
            js: 'src/js/**/*.js',
            style: 'src/less/**/*.less',
            fonts: 'src/fonts/**/*.*',
            template: 'src/template/*.html',
            templates: {
                layout: ['src/template/footer.html', 'src/template/head.html', 'src/template/header.html'],
                article: ['src/template/article.html'],
                index: ['src/template/articles.html'],
                problems: ['src/template/irodov.html', 'src/template/wrote.html', 'src/template/yakovlev.html']
            }
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
        port: 5671
    },
    templates: {
        article: "<header><time class='datetime'>{date}</time><h1>{href}</h1></header><article>{text}{readmore}</article>"
    },
    replace: {
        prefix: '@@',
        asepath: '@file'
    }
}

function build(file,type){
    var filePath    =   paths.basename(file.path);
    var stats       =   fs.statSync(file.path);
    var date        =   new Date(util.inspect(stats.mtime)).toLocaleString('en-US',config.date.options);
    var contents    =   String(file.contents);

    var title       =   String(/<h1>(.|\n)*<\/h1>/igm.exec(contents)[0])
                                .replace('<h1>','')
                                .replace('</h1>','');
        
    var text        =   /<!--d-->(.|\n)*/igm.exec(contents)[0];
    var desc        =   /<!--d-->(.|\n)*<!--ed-->/igm.exec(contents)[0];

    var href        =   "<a href='{0}'>{1}</a>"
                        .replace('{0}',config.path.build.article+filePath)
                        .replace('{1}',title);

    var href2       =   "<a class='readmore' href='{0}'>{1}</a>"
                        .replace('{0}',config.path.build.article+filePath)
                        .replace('{1}','Читать далее...');

    if (type==="desc") {
        contents = String(config.templates.article)
                        .replace('{readmore}',href2)
                        .replace('{date}',date)
                        .replace('{href}',href)
                        .replace('{text}',desc);
    }

    if (type==="article") {
        contents = String(articleTemplate)
                        .replace('{title}',title)
                        .replace('{section}',config.templates.article)
                        .replace('{readmore}','')
                        .replace('{date}',date)
                        .replace('{href}',title)
                        .replace('{text}',text);
    }

    file.contents = new Buffer(contents);
    return file;
}

function compare(file1,file2){
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

var gulp            = require('gulp'),  
    
    less            = require('gulp-less'),         // Less
    minifyCSS       = require('gulp-minify-css'),   // Сжимает, оптимизирует
    autoprefixer    = require('less-plugin-autoprefix'), // Автопрефиксер свойств для старых браузеров
    autoprefix      = new autoprefixer({browsers: ["last 3 versions"]}), //Свойства для браузеров от 2010 года  
    
    cache           = require('gulp-cached'),       // Обработка только modified файлов
    sort            = require('gulp-sort'),         // Сортировка файлов в gulp.src
    rename          = require("gulp-rename");       // Переименование
    concat          = require('gulp-concat'),       // Объединяет файлы в один
    
    fs              = require('fs'),                // Работа с файловой системой
    paths           = require('path'),              // Получение basename         
    util            = require('util'),              // .inspect (для получения даты)
    jsonfile        = require('jsonfile')           // Работа c json
    
    fileinclude     = require('gulp-file-include'),
    markdown        = require('gulp-markdown'),
    tap             = require('gulp-tap'),
    
    argv            = require('yargs').argv,
    connect         = require('gulp-connect'),
    runSequence     = require('run-sequence'),
    spawn           = require('child_process').spawn, 

    articleTemplate = fs.readFileSync(config.path.src.template+'article.html', 'utf8');

gulp.task('default', ['server','auto-reload','watch'], function () {
    jsonfile.readFile(config.files.cache, function(err, obj) {
        cache.caches=obj;
    })
})

gulp.task('auto-reload', function() {
    var p;
    gulp.watch('gulpfile.js', spawnChildren);
    spawnChildren();
    function spawnChildren(e) {
        if (p) {p.kill()}
        p = spawn('gulp', ['watch'], {stdio: 'inherit'}); 
    } 
}) 

gulp.task('server', function() {
    connect.server(config.server)
})

gulp.task('watch',function () {
    gulp.watch([config.path.watch.templates.index],['index:build']);
    gulp.watch([config.path.watch.templates.layout],['layout:build']);
    gulp.watch([config.path.watch.templates.article],['article:build']);
    gulp.watch([config.path.watch.templates.problems],['problems:build']);
    gulp.watch([config.path.watch.style],['less:build']);
    gulp.watch([config.path.watch.article], ['article:build']); 
    // gulp.watch([config.path.watch.template, config.path.watch.html],['html:build']);    
})

gulp.task('html:build', function () {
    gulp.src(config.path.src.html) 
        .pipe(fileinclude(config.replace))
        .pipe(gulp.dest(config.path.build.html))
        .pipe(connect.reload());  
})

gulp.task('layout:build', function () {
    runSequence(['article:build','article:rebase','html:build']);
})


gulp.task('less:build', function () {
    gulp.src(['src/less/main.less'])
        .pipe(less({plugins: [autoprefix]}))
        // .pipe(concat('main.css')) 
        .pipe(minifyCSS())   
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(config.path.build.css))
        .pipe(connect.reload());
})

gulp.task('index:build', function() {
    gulp.src(config.path.src.index)
        .pipe(fileinclude(config.replace))
        .pipe(gulp.dest(config.path.build.html))    
        .pipe(connect.reload());  
})

gulp.task('problems:build', function () {
    gulp.src(config.path.src.problems) 
        .pipe(fileinclude(config.replace))
        .pipe(gulp.dest(config.path.build.html))
        .pipe(connect.reload());  
})

gulp.task('article:build', function() {
    runSequence(['article:rebase','index:build']);
    return gulp.src(config.path.src.article)
        // .pipe(cache('article'))
        .pipe(markdown())
        .pipe(fileinclude(config.replace))
        .on('data',function(file){
            jsonfile.writeFile(config.files.cache, cache.caches, function (err) {})
            console.log('Скомпилирована статья -- ',paths.basename(file.path))
            return build(file,"article");
        })
        .pipe(fileinclude(config.replace))
        .pipe(gulp.dest(config.path.build.article))
        .pipe(connect.reload()); 
})

gulp.task('article:rebase', function() {
    return gulp.src(config.path.src.article)
        .pipe(sort({comparator: function(file1,file2){return compare(file1,file2)}}))
        .pipe(fileinclude(config.replace))
        .pipe(markdown())
        .on('data',function(file){
            return build(file,"desc");
        })
        .pipe(fileinclude(config.replace))
        .pipe(concat(config.files.articles))
        .pipe(gulp.dest(config.path.src.template))
})