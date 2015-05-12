define(['common/module',
    'angular',
    'angular-couch-potato',
    'angular-ui-router'
], function(module, ng, couchPotato) {
    'use strict';
    module.registerService('authInterceptorService', ['$q', '$location', function($q, $location) {

        var authInterceptorServiceFactory = {};

        var _request = function(config) {
            return config;
        }

        var _responseError = function(rejection) {
            return $q.reject(rejection);
        }

        authInterceptorServiceFactory.request = _request;
        authInterceptorServiceFactory.responseError = _responseError;

        return authInterceptorServiceFactory;
    }]);
});