define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-resource'
], function (ng, couchPotato) {
    'use strict';

    var module = ng.module('app.contacts', [
        'ui.router',
        'ngResource'
    ]);

    module.config(function ($stateProvider, $couchPotatoProvider) {
        $stateProvider
            .state('contacts', {
                url: '/contacts',
                views: {
                    root: {
                        templateUrl: 'app/contacts/views/contacts.html',
                        controller: 'ContactCtrl',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies()
                        }
                    }
                },
                data:{
                    title: 'Contacts'
                }
            });
    });

    couchPotato.configureApp(module);

    module.run(function($couchPotato){
        module.lazy = $couchPotato;
    });

    return module;
});