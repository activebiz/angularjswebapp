define(['dashboard/module'], function (module) {

    'use strict';

    module.registerController('DashboardCtrl', function ($scope) {
        $scope.title = 'Dashboard';
        $scope.person = { name: 'Preyash Desai' };
        var updateClock = function(){
            $scope.clock = new Date();
        };
        
        var timer = setInterval(function(){
           $scope.$apply(updateClock);
        }, 1000);
        updateClock();
    });

});
