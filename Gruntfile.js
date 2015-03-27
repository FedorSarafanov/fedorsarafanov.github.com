module.exports = function(grunt){grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less: {
            dist: {
                  files: {
                        'css/main.css': ['css/flex.less']
                  },
                  options: {
                        compress: true,
                        cleancss: false,
                        sourceMap: true,
                        sourceMapFilename: 'css/main.css.map',
                        sourceMapRootpath: '/assets/',
                  }
            }
      },
       autoprefixer:{
            options: {
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
                cascade: false
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'css/main.css',
                dest: 'css/'
            }
        }      
});
grunt.loadNpmTasks('grunt-contrib-less'); // Compile LESS files to CSS.
grunt.loadNpmTasks('grunt-autoprefixer');

grunt.registerTask('default', ['less', 'autoprefixer']);

};