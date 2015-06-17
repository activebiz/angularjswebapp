define(['dashboard/module','toastr'], function(module,toastr) {

    'use strict';

    module.registerController('dashboardCtrl', function($scope) {
        $scope.title = 'Dashboard';
    });

});
