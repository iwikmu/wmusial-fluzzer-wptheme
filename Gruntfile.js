module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration goes here.
    sass: {
      dist: {
        files: [
            {src: ['scss/app.scss'], dest: 'static/css/output.css'},
        ],
      },
    },

    watch: {
      sass: {
        files: ['scss/**.scss', 'scss/**/*.scss', 'bower_componets/foundation-sass/scss/**.scss'],
        tasks: ['sass'],
      },
    },
  });

  // Load plugins here.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks here.
  grunt.registerTask('default', ['sass', 'watch']);

};
