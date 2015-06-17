define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-resource'
], function (ng, couchPotato) {
    'use strict';

    var module = ng.module('app.employees', [
        'ui.router',
        'ngResource'
    ]);

    module.config(function ($stateProvider, $couchPotatoProvider) {
        $stateProvider
            .state('employees', {
                url: '/employees',
                views: {
                    root: {
                        controller: 'employeesCtrl',
                        templateUrl: 'app/employees/views/employeelist.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'employees/controllers/employeesCtrl'
                            ])
                        }
                    }
                }
            });
    });

    couchPotato.configureApp(module);

    module.run(function($couchPotato){
        module.lazy = $couchPotato;
    });

    return module;
});