requirejs.config({
    waitSeconds: 0,
    paths: {
        'jquery': 'lib/jquery/dist/jquery.min',
        'jquery-ui': 'lib/jquery-ui/jquery-ui.min',

        'bootstrap': 'lib/bootstrap/dist/js/bootstrap.min',

        'angular': 'lib/angular/angular.min',
        'angular-cookies': 'lib/angular-cookies/angular-cookies.min',
        'angular-resource': 'lib/angular-resource/angular-resource.min',
        'angular-sanitize': 'lib/angular-sanitize/angular-sanitize.min',
        'angular-animate': 'lib/angular-animate/angular-animate.min',
        'angular-resource': 'lib/angular-resource/angular-resource.min',

        'domReady': 'lib/requirejs-domready/domReady',

        'angular-ui-router': 'lib/angular-ui-router/release/angular-ui-router.min',

        'angular-google-maps': 'lib/angular-google-maps/dist/angular-google-maps.min',

        'angular-bootstrap': 'lib/angular-bootstrap/ui-bootstrap-tpls.min',

        'angular-couch-potato': 'lib/angular-couch-potato/dist/angular-couch-potato',
        'ngSanitize' : 'lib/angular-sanitize/angular-sanitize.min',
        // app js file includes
        // 'includes': 'includes',
        // 'app':'app'
    },
    shim: {
        'angular': {'exports': 'angular', deps: ['jquery']},
        'angular-ui-router' : {deps:['angular']},
        'angular-animate': { deps: ['angular'] },
        'angular-resource': { deps: ['angular'] },
        'angular-cookies': { deps: ['angular'] },
        'ngSanitize': { deps: ['angular'] },
        'angular-bootstrap': { deps: ['angular'] },
        'angular-ui-router': { deps: ['angular'] },
        'angular-google-maps': { deps: ['angular'] },

        'angular-couch-potato': { deps: ['angular'] },

        'jquery-ui': { deps: ['jquery'] },
        'bootstrap': { deps: ["jquery"] }
    },
    priority: [
        'jquery',
        'bootstrap',
        'angular'
    ]
});