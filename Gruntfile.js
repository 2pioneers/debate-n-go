module.exports = function(grunt) {

    // load all grunt tasks matching the 'grunt-*' pattern
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        jshint : {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: false,
                boss: true,
                eqnull: true,
                browser: true,
                smarttabs:true,
                asi:true,
                globals: {
                    module: true,
                    require: true,
                    define: true,
                    console: true,
                    angular: true
                },
                ignores: ['app/libs/**/**']
            },
            all : {
                src: ["app/src/scripts/**/*.js", "app/src/app.js"]

            },
            configs:
                ['package.json','Gruntfile.js']


        },

        less : {
            //less config
            options:{
                paths:[],
                cleancss:true,
                compress: true,
                report: 'min'
            },
            development:{
                options: {
                    cleancss:false,
                    compress:false

                },
                files: {
                    'app/src/index.css':['app/src/index.less', 'app/src/styles/*.less']
                }

            },
            build:{
                files: {
                    'public/bld/index.css':'app/bld/**/*.less'
                }
            }
        },
        watch : {
            //watch config
            scripts:{
                files:['**/*.js','**/*.less'],
                tasks:['less:development', 'jshint:all']
            },

        },


    });


    grunt.registerTask('default', ['jshint']);

};