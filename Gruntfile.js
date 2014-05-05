/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    libs: grunt.file.readJSON('libs.json'),
    concat: {
      dist: {
        src: ['<%= libs.jquery %>','<%= libs.toc %>','src/scripts/*.js'],
        dest: 'dist/scripts/<%= pkg.name %>.js'
      }
    },
    uglify: {
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/scripts/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      gruntfile: {
        src: 'Gruntfile.js'
      },
    },
    sass: {
      build: {
        src: 'src/styles/main.scss',
        dest: 'src/styles/main.css'
      }
    },
    cssmin: {
      combine: {
          src: ['src/bower_components/normalize-css/normalize.css','src/styles/main.css'],
          dest: 'dist/styles/<%= pkg.name %>.min.css'
      }
    },
    jade: {
      options: {
        data: {
          title: 'DEATH FROM ABOVE',
          css_path: 'styles/<%= pkg.name %>.min.css',
          script_path: 'scripts/<%= pkg.name %>.min.js'
        }
      },
      dist: {
        src: 'src/templates/index.jade',
        dest: 'dist/index.html'
      }
    },
    copy: {
      dist_images: {
        expand: true,
        src: 'src/images/**',
        dest: 'dist/images/',
        flatten: true,
        filter: 'isFile'
      }
    },
    watch: {
      options: {
        livereload:true
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src_test: {
        files: '<%= concat.dist.src %>',
        tasks: ['concat:dist','uglify:dist']
      },
      sass: {
        files: 'src/styles/main.scss',
        tasks:['sass:build','cssmin:combine'],
      },
      jade: {
        files:'src/templates/*.jade',
        tasks: ['jade:dist']
      }
    } 
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass', 'cssmin']);
  grunt.registerTask('build', ['jshint', 'concat', 'uglify', 'sass', 'cssmin','copy','jade']);
  grunt.registerTask('watcher',['watch']);

};
