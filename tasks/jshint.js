'use strict';


module.exports = function jshint(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Options
	return {
		files: ['controllers/**/*.js', 'server/**/*.js', 'models/**/*.js'],
		options: {
		    jshintrc: '.jshintrc'
		}
	};
};
