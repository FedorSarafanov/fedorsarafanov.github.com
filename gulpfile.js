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
    connect         = require('gulp-connect');

gulp.task('server', function() {
    connect.server({
        livereload: true,
        root: '_site',
        port: 5671
    })
})

// gulp.task('default',['watch', 'server']);


gulp.task('watch',function () {
    gulp.watch(['_less/*.less'],gulp.series('less:build'));
    // gulp.watch(['_site/**/*.*'],['reload']);
    gulp.watch(['_site/css/main.min.css'],gulp.series('reload'));
    // gulp.watch([config.path.watch.template, config.path.watch.html],['html:build']);    
})

gulp.task('less:build', function () {
    gulp.src(['_less/main.less'])
        .pipe(less({plugins: [autoprefix]}))
        // .pipe(concat('main.css')) 
        .pipe(minifyCSS())   
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
})

gulp.task('reload', function () {
    gulp.src(['./_site'])
        .pipe(connect.reload());
})

gulp.task('default',
  gulp.parallel('watch', gulp.series('server')));