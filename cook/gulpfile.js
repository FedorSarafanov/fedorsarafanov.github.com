var gulp            = require('gulp'),  
    
    less            = require('gulp-less'),         // Less
    minifyCSS       = require('gulp-minify-css'),   // Сжимает, оптимизирует
    autoprefixer    = require('less-plugin-autoprefix'), // Автопрефиксер свойств для старых браузеров
    autoprefix      = new autoprefixer({browsers: ["last 3 versions"]}), //Свойства для браузеров от 2010 года  
    // 
    // cache           = require('gulp-cached'),       // Обработка только modified файлов
    // sort            = require('gulp-sort'),         // Сортировка файлов в gulp.src
    rename          = require("gulp-rename");       // Переименование
    concat          = require('gulp-concat'),       // Объединяет файлы в один
    connect         = require('gulp-connect'),
    kramdown        = require('gulp-kramdown'),
    fs              = require('fs'),                // Работа с файловой системой
    // paths           = require('path'),              // Получение basename         
    // util            = require('util'),              // .inspect (для получения даты)
    // jsonfile        = require('jsonfile'),           // Работа c json
    fileinclude     = require('gulp-file-include');   
const shell = require('gulp-shell');
gulp.task('server', function() {
    connect.server({
        livereload: true,
        root: './',
        port: 2018
    })
})

gulp.task('default',['watch', 'server']);

gulp.task('watch',function () {
    gulp.watch(['less/*.less'],['less:build']);
    gulp.watch(['index.html'],['reload']);
    gulp.watch(['article.md'],['buildmd']);
    gulp.watch(['css/main.min.css'],['reload']);
    // gulp.watch([config.path.watch.template, config.path.watch.html],['html:build']);    
})

function build(file){
    var article = String(fs.readFileSync('article.html', 'utf8'));
    var contents = String(fs.readFileSync('index_.html', 'utf8'));
    // var text        =   contents;
    contents = String(contents)
                        .replace('{text}',article);
    file.contents = new Buffer(contents);
    return file;
}

gulp.task('less:build', function () {
    gulp.src(['less/main.less'])
        .pipe(less({plugins: [autoprefix]}))
        // .pipe(concat('main.css')) 
        .pipe(minifyCSS())   
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
})

gulp.task('buildmd', function () {
    gulp.src('article.md')
        .pipe(shell(['kramdown article.md > article.html']));
        // .pipe(kramdown())
        // .pipe(gulp.dest
        // ('./'));
    gulp.src('index.html')
        .on('data',function(file){
            // jsonfile.writeFile(config.files.cache, cache.caches, function (err) {})
            console.log('Скомпилирована статья -- ')
            return build(file);
        })
        // .pipe(fileinclude(config.replace))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());         
});

gulp.task('reload', function () {
    gulp.src(['./'])
        .pipe(connect.reload());
})