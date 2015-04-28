define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-resource'
], function (ng, couchPotato) {
    'use strict';

    var module = ng.module('app.dashboard', [
        'ui.router',
        'ngResource'
    ]);

    module.config(function ($stateProvider, $couchPotatoProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                views: {
                    root: {
                        controller: 'DashboardCtrl',
                        templateUrl: 'app/dashboard/views/dashboard.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'dashboard/controllers/DashboardCtrl'
                            ])
                        }
                    }
                },
                data:{
                    title: 'Dashboard'
                }
            });
    });

    couchPotato.configureApp(module);

    module.run(function($couchPotato){
        module.lazy = $couchPotato;
    });

    return module;
});