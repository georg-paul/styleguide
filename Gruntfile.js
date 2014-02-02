module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({

		//Read the package.json (optional)
		pkg: grunt.file.readJSON('package.json'),

		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> ',

		watch: {
			css: {
				files: ['**/*.scss'],
				tasks: ['sass']
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'demo/demo.css': 'demo/demo.scss'
				}
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task
	grunt.registerTask('default', ['sass', 'watch']);

};