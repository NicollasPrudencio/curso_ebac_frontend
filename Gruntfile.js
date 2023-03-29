module.exports = function (grunt) {

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "./build/styles/main.min.css": "./src/styles/main.less"
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'arquivo-js.min.js': 'arquivo-js.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['less', 'uglify']);
};
