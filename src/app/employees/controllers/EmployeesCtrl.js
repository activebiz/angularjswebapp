define(['employees/module'], function (module) {

    'use strict';

    module.registerController('EmployeesCtrl', function ($scope) {
        $scope.title = 'Employee List';
        $scope.employees = [{ name : 'Preyash Desai', age : '22' }, {name : 'Hima Desai', age : '21'}];
        $scope.add = function(){
            if($scope.newEmployee !== undefined)
            {
                $scope.employees.push($scope.newEmployee);
                $scope.newEmployee = undefined;
            }
        };
    });

});
