define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-resource'
], function (ng, couchPotato) {
    'use strict';

    var module = ng.module('app.misc', [
        'ui.router',
        'ngResource'
    ]);

    module.config(function ($stateProvider, $couchPotatoProvider) {
        $stateProvider
            .state('misc', {
                url: '/misc',
                views: {
                    root: {
                        controller: 'miscCtrl',
                        templateUrl: 'app/misc/views/index.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'misc/directives/bnSlideShow',
                                'misc/controllers/miscCtrl'
                            ])
                        }
                    }
                },
                data:{
                    title: 'Misc.'
                }
            });
    });

    couchPotato.configureApp(module);

    module.run(function($couchPotato){
        module.lazy = $couchPotato;
    });

    return module;
});