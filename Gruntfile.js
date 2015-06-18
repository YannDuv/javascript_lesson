'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concurrent: {
      dev: [
        'jshint',
        'mochaTest',
        'watch'
      ],
      options: {
        logConcurrentOutput: true
      }
    },

    jshint: {
      options: {
        jshintrc: true
      },
      all: ['*.js', 'lessons/*.js', 'test/*.js']
    },

    mochaTest: {
      src: ['test/*.js'],
      options: {
        reporter: 'spec'
      }
    },

    watch: {
      jshint: {
        files: '<%= jshint.all %>',
        tasks: ['jshint', 'mochaTest']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  // Making grunt default to force in order not to break the project.
  grunt.option('force', true);

  grunt.registerTask('default', ['concurrent']);
};
