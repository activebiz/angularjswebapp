define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-resource'
], function (ng, couchPotato) {
    'use strict';

    var module = ng.module('app.projects', [
        'ui.router',
        'ngResource'
    ]);

    module.config(function ($stateProvider, $couchPotatoProvider) {
        $stateProvider
            .state('projects', {
                url: '/projects',
                views: {
                    root: {
                        controller: 'ProjectCtrl',
                        templateUrl: 'app/projects/views/index.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'projects/controllers/ProjectCtrl'
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