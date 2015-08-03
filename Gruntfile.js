module.exports = function(grunt) {
  // time
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        // If you can't get source maps to work, run the following command in your terminal:
        // $ sass scss/foundation.scss:css/foundation.css --sourcemap
        // (see this link for details: http://thesassway.com/intermediate/using-source-maps-with-sass )
        sourceMap: true
      },

      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'public/stylesheets/foundation.css': 'scss/foundation.scss'
        }
      }
    },

    copy: {
      scripts: {
        expand: true,
        cwd: 'bower_components/foundation/js/',
        src: '**',
        flatten: false,
        dest: 'public/vendor/foundation/js/'
      },

      iconfonts: {
        expand: true,
        cwd: 'bower_components/fontawesome/',
        src: ['**', '!**/less/**', '!**/css/**', '!bower.json'],
        dest: 'assets/fontawesome/'
      },

    },


      'string-replace': {

        fontawesome: {
          files: {
            'assets/fontawesome/scss/_variables.scss': 'assets/fontawesome/scss/_variables.scss'
          },
          options: {
            replacements: [
              {
                pattern: '../fonts',
                replacement: '../assets/fontawesome/fonts'
              }
            ]
          }
        },
      },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass'],
        options: {
              livereload:true,
            }
      },

      js: {
        files: 'js/custom/**/*.js',
        tasks: ['concat', 'uglify'],
        options: {
          livereload:true,
        }
      },

       all: {
        files: '**/*.php',
        options: {
            livereload:true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-string-replace');

  grunt.registerTask('build', ['copy', 'string-replace:fontawesome', 'sass']);
  grunt.registerTask('default', ['watch']);
};
