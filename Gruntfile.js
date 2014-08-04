/**
 * Tasks for running the php dev server and livereload server
 *
 */
module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),


        shell:{

            /**
             * Provides and easy server for development.
             */
            server:{
                command: 'php -S localhost:9000'

            },

            /**
             * Uses the node implementation of livereload for refreshing the browser.
             */
            livereload:{

                //Only look for changes in the newly regenerated blog in the public folder
                command: 'livereloadx .'
            }

        }
    });


    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('server',['shell:server']);

    grunt.registerTask('watch',['shell:livereload']);


};