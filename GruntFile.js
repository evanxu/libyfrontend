module.exports = function(grunt){
  grunt.initConfig({
    config: grunt.file.readJSON('config.json'),

    //create the local server
    connect: {
      //create the server for dev, use 7777 port
      dev: {
        options: {
          port: 7777,
          base: {
            path: '<%= config.dev %>/<%= config.path.pages %>',
            options: {
              index: '<%= config.path.pages %>/<%= config.index %>'
            }
          }
        }
      },
      //create the server for dev, use 8888 port
      build: {
        options: {
          port: 8888,
          path: '<%= config.build %>',
          options: {
            index: '<%= config.views %>/<%= config.index %>'
          }
        }
      }
    },

    //sass to css
    sass: {
      dev: {
        files: [{
          expand: true,
          cwd: '<%= config.dev %>/<%= config.path.sass %>/',
          src: ['**/*.scss', '!_'],
          dest: '<%= config.dev %>/<%= config.path.css %>/',
          ext: '.css',
          extDot: 'last'
        }]
      }
    },

    //添加css前缀
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      dev: {
        expand: true,
        flatten: true,
        src: '<%= config.dev %>/<%= config.path.css %>/**/*.css',
        dest: '<%= config.dev %>/<%= config.dist.css %>/'
      }
    },

    //最小化css
    cssmin: {
      build: {
        files: [{
          expand: true,
          cwd: '<%= config.dev %>/<%= config.dist.css %>/',
          src: ['**/*.css', '!*.css.map'],
          dest: '<%= config.build %>/<%= config.dist.css %>/',
          ext: '.min.css'
        }]
      }
    },

    // js压缩
    uglify: {
      build: {
        files: [{
          expand: true,
          cwd: '<%= config.dev %>/<%= config.path.js %>/',
          src: ['**/*.js'],
          dest: '<%= config.build %>/<%= config.dist.js %>/',
          ext: '.min.js'
        }]
      }
    },

    //图片压缩
    imagemin: {
      dev: {
        files: [{
          expand: true,
          cwd: '<%= config.dev %>/<%= config.path.images %>/',
          src: '**/*.{jpg,gif,png}',
          dest: '<%= config.dev %>/<%= config.dist.images %>/'
        }]
      },
      build: {
        files: [{
          expand: true,
          cwd: '<%= config.dev %>/<%= config.path.images %>/',
          src: '**/*.{jpg,gif,png}',
          dest: '<%= config.build %>/<%= config.dist.images %>/'
        }]
      }
    },

    //雪碧图
    sprite: {
      dev: {
        src:'<%= config.dev %>/<%= config.path.images %>/**/*.png',
        dest: '<%= config.dev %>/<%= config.path.images %>/sprite.png',
        destCss: '<%= config.dev %>/<%= config.path.sass %>/_sprite.scss',
        //retinaSrcFilter: ['<%= config.dev %>/<%= config.path.images %>/**/*.png'],
        //retinaDest: '<%= config.dev %>/<%= config.path.images %>/retina@2x.png',
      }
    },

    //include page in html
    includereplace: {
      dev: {
        options: {
          prefix: '<!-- ',
          suffix: ' -->',
        },
        expand: true,
        cwd: '<%= config.dev %>/<%= config.path.templates %>/',
        src: ['**/*.html', '!_*'],
        dest: '<%= config.dev %>/<%= config.path.pages %>/'
      }
    },

    //清除文件夹
    clean: {
      dev: ['<%= config.dev %>/dist'],
      build: ['<%= config.build %>/dist']
    },

    //监听
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      configFiles: {
        files: ['GruntFile.js', 'config.json'],
        options: {
          reload: true
        }
      },
      script: {
        files: ['<%= config.dev %>/<%= config.path.js %>/**/*.js'],
        tasks: ['uglify:dev']
      },
      sass: {
        files: ['<%= config.dev %>/<%= config.path.sass %>/**/*.scss', '!_'],
        tasks: ['sass:dev', 'autoprefixer:dev']
      },
      html: {
        files: ['<%= config.dev %>/<%= config.path.templates %>/**/*.*', '!_*'],
        tasks: ['includereplace:dev']
      }
    },

    //复制文件夹
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: '<%= config.dev %>',
          src: ['**', '!sass'],
          dest: '<%= config.build %>'
        }]
      }
    },


    //grunt信息提示
    notify: {
      connect: {
        options: {
          message: 'Server is ready!'
        }
      },
      sass: {
        options: {
          message: 'Sass compile to css has finished!'
        }
      },
      html: {
        options: {
          message: 'Html pages has finished!'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');  //清除文件夹
  grunt.loadNpmTasks('grunt-contrib-copy');   //复制文件夹
  grunt.loadNpmTasks('grunt-contrib-concat');   //合并文件

  grunt.loadNpmTasks('grunt-contrib-watch');  //监听
  grunt.loadNpmTasks('grunt-contrib-connect');  //创建本地服务器

  grunt.loadNpmTasks('grunt-contrib-jshint');   //js语法校验
  grunt.loadNpmTasks('grunt-contrib-uglify'); //js压缩

  grunt.loadNpmTasks('grunt-contrib-sass');   //sass转css，需安装ruby
  grunt.loadNpmTasks('grunt-contrib-cssmin');   //压缩css
  grunt.loadNpmTasks('grunt-autoprefixer');   //自动添加css前缀

  grunt.loadNpmTasks('grunt-contrib-imagemin');   //压缩图片
  grunt.loadNpmTasks('grunt-spritesmith');    //雪碧图

  grunt.loadNpmTasks('grunt-include-replace');  //include page in html

  grunt.loadNpmTasks('grunt-notify');   //grunt提示信息



  grunt.registerTask('default', ['connect', 'notify:connect', 'watch']);
  grunt.registerTask('dev', ['clean:dev', 'sass:dev', 'autoprefixer:dev', 'imagemin:dev']);
  grunt.registerTask('build', ['clean:build', 'uglify:build', 'cssmin:build', 'imagemin:build']);


  grunt.event.on('watch', function(action, filepath, target){
    var notify = grunt.option('notify');
    if(notify){
      grunt.task.run('notify:' + target);
    }
  });

  // grunt.event.on('watch:html', function(action, filepath, target) {
  //   grunt.task.run('notify:html');
  // });

}
