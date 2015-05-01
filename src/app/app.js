'use strict';

define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-animate',
    'angular-bootstrap',
    'ngSanitize'
], function(ng, couchPotato) {

    var app = ng.module('app', [
        'ngSanitize',
        'scs.couch-potato',
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        // // App
        'app.dashboard',
        'app.employees',
        'app.projects',
    ]);

    couchPotato.configureApp(app);

    app.config(function($provide, $httpProvider, $stateProvider, $urlRouterProvider) {
        // Intercept http calls.
        $provide.factory('ErrorHttpInterceptor', function($q) {
            var errorCounter = 0;

            function notifyError(rejection) {
                console.log(rejection);
            }

            return {
                // On request failure
                requestError: function(rejection) {
                    // show notification
                    notifyError(rejection);
                    // Return the promise rejection.
                    return $q.reject(rejection);
                },

                // On response failure
                responseError: function(rejection) {
                    // show notification
                    notifyError(rejection);
                    // Return the promise rejection.
                    return $q.reject(rejection);
                }
            };
        });

        // Add the interceptor to the $httpProvider.
        $httpProvider.interceptors.push('ErrorHttpInterceptor');

        $urlRouterProvider.otherwise('/dashboard');
        // // $urlRouterProvider.otherwise('/');
        // $stateProvider.state('home', {
        //     url: "/",
        //     views: {
        //         'header': {
        //             templateUrl: 'app/common/templates/header.tpl.html'
        //         },
        //         'content': {
        //             templateUrl: 'app/common/templates/content.tpl.html'
        //         },
        //         'footer': {
        //             templateUrl: 'app/common/templates/footer.tpl.html'
        //         },
        //     }
        // });

    });

    app.run(function($couchPotato, $rootScope, $state, $stateParams) {
        app.lazy = $couchPotato;
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });
    return app;
});
