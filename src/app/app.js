'use strict';

define([
    'angular',
    'angular-couch-potato',
    'toastr',
    'angular-ui-router',
    'angular-animate',
    'angular-bootstrap',
    'ngSanitize'
], function(ng, couchPotato, toastr) {
    var app = ng.module('app', [
        'ngSanitize',
        'scs.couch-potato',
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        // // App
        'app.misc',
        'app.dashboard',
        'app.employees',
        'app.projects'
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

        $provide.factory('$exceptionHandler', function() {
            return function(exception, cause) {
                // exception.message += ' (caused by "' + cause + '")';
                toastr.options = {
                    "closeButton": true,
                    "debug": true,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-bottom-full-width",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
                toastr.error(exception.message, cause);
                throw exception;
            };
        });

        $urlRouterProvider.otherwise('/dashboard');
    });

    app.constant('abSettings', {
         baseUrl: location.protocol+ '//'+document.domain
    });

    app.run(function($couchPotato, $rootScope, $state, $stateParams) {
        app.lazy = $couchPotato;
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });
    return app;
});