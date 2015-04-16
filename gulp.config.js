module.exports = function() {
    /**
     * Bower and NPM files
     */
    var bower = {
        json: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    var paths = {
        src: 'src/',
        app: 'app/',
        root: './',
        temp: './src/.tmp/',
        //temp: temp,
        dest: 'wwwroot/',
        statics: ['sound', 'styles'],
        less:[
            './src/styles/less/bootstrap.less'
        ],
        fonts: bower.directory + 'font-awesome/fonts/**/*.*',
        packages: [
            './package.json',
            './bower.json'
        ],
        includeExtensions: [
            '**/*.js'],
        excludeExtensions: [
            '!**/*.min.js',
            '!**/*.backup.js',
            '!**/src/**',
            '!**/build/**',
            '!**/speed/**',
            '!**/test/**',
            '!**/examples/**',
            '!**/ui/**'],
        tempCss: './src/.tmp/css/',
        destCss: 'wwwroot/styles/css/**/*',
        srcpluginjs:[
            './src/plugin/**/*.js'
        ],
        tempPlugin: './src/.tmp/plugin/',
        srcStatic : [
            'src/index.html',
            'src/rconfig.js',
            'src/includes.js',
            'src/main.js'
        ],
        destStatic : [
            'wwwroot/index.html',
            'wwwroot/rconfig.js',
            'wwwroot/includes.js',
            'wwwroot/main.js'
        ],
        srcExtLib : 'src/lib/**/*',
        destExtLib :'wwwroot/lib/',
        srcApp: 'src/app/**/*',
        destApp: 'wwwroot/app/'
    };

    var config = {
        paths: paths,
        bower : bower
    };
    return config;
};
