// Defer AngularJS bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

define([
    'require',
    'jquery',
    'angular',
    'angular-ui-router',
    'domReady',

    //'pace',
    'bootstrap',
    'app/app',
    'app/includes'
], function (require, $, ng, domReady) {
    'use strict';

    // $.sound_path = appConfig.sound_path;
    // $.sound_on = appConfig.sound_on;
    require([domReady], function (document) {
        //angular.bootstrap(document, ['myApp']);
        ng.bootstrap(document, ['app']);
         ng.resumeBootstrap();
    });


    //domReady(function (document) {
    //    ng.bootstrap(document, ['app']);
    //    ng.resumeBootstrap();
    //});
});
