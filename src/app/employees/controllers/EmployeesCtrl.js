define(['employees/module', 'toastr'], function(module, toastr) {

    'use strict';

    module.registerController('EmployeesCtrl', function($scope) {
        $scope.title = 'Employee List';
        $scope.employees = [{
            name: 'Preyash Desai',
            age: '22'
        }, {
            name: 'Hima Desai',
            age: '21'
        }];
        $scope.add = function() {
            if ($scope.newEmployee !== undefined) {
                $scope.employees.push($scope.newEmployee);
                toastr.info($scope.newEmployee.name + ' added!!');
                $scope.newEmployee = undefined;
            }
        };
    });

});
