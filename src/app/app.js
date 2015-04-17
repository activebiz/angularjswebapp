'use strict';

define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-animate',
    'angular-bootstrap',
    'ngSanitize'
], function (ng, couchPotato) {

    var app = ng.module('app', [
         'ngSanitize',
         'scs.couch-potato',
         'ngAnimate',
         'ui.router',
         'ui.bootstrap'
        // // App
        // 'app.auth'
    ]);

    couchPotato.configureApp(app);

    app.config(function ($provide, $httpProvider, $stateProvider, $urlRouterProvider) {
        // Intercept http calls.
        $provide.factory('ErrorHttpInterceptor', function ($q) {
            var errorCounter = 0;
            function notifyError(rejection){
                console.log(rejection);
            }

            return {
                // On request failure
                requestError: function (rejection) {
                    // show notification
                    notifyError(rejection);
                    // Return the promise rejection.
                    return $q.reject(rejection);
                },

                // On response failure
                responseError: function (rejection) {
                    // show notification
                    notifyError(rejection);
                    // Return the promise rejection.
                    return $q.reject(rejection);
                }
            };
        });

        // Add the interceptor to the $httpProvider.
        $httpProvider.interceptors.push('ErrorHttpInterceptor');
        
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('contact',{
            url : '/contact',
            templateUrl: 'app/contacts/views/contacts.html'
        });

    });

    app.run(function ($couchPotato, $rootScope, $state, $stateParams) {
        app.lazy = $couchPotato;
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });
    return app;
});
