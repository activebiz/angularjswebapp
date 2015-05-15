define(['dashboard/module','toastr'], function(module,toastr) {

    'use strict';

    module.registerController('DashboardCtrl', function($scope) {
        $scope.title = 'Dashboard';
        $scope.person = {
            name: 'Preyash Desai'
        };

        var updateClock = function() {
            $scope.clock = new Date();
        };

        var timer = setInterval(function() {
            $scope.$apply(updateClock);
        }, 1000);
        updateClock();

        // I toggle the value of isVisible.
        $scope.toggle = function() {

            $scope.isVisible = !$scope.isVisible;
            if(!$scope.isVisible){
                toastr.info('showHide directive is not visible');
            }
            else{
                toastr.info('showHide directive is visible');
            }
                

        };

        // Default the blocks to be visible.
        $scope.isVisible = true;
    });

});
