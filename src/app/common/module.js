define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-resource'
], function (ng, couchPotato) {
    'use strict';

    var module = ng.module('app.common', [
        'ui.router',
        'ngResource'
    ]);

    module.config(function ($urlRouterProvider) {
        // $urlRouterProvider.when('/wwwroot#access_token=123sdfsdfdsfdsfsfsdfsdfdsf/', function(config){
        //     debugger;
        // });
    });

    couchPotato.configureApp(module);

    module.run(function($couchPotato){
        module.lazy = $couchPotato;
    });

    return module;
});