define(['projects/module', 'toastr', 'projects/services/projectsService'], function(module, toastr) {

    'use strict';

    module.registerController('addNewProjectCtrl', function($scope, $modalInstance, projectsService) {

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };

        $scope.add = function() {
            if ($scope.newProject !== undefined) {

                    var prod = {
                        name: $scope.newProject.name,
                        budget: $scope.newProject.budget,
                        isActive: $scope.newProject.isActive,
                        starts: $scope.newProject.starts,
                        ends: $scope.newProject.ends,
                        percentComplete: $scope.newProject.percentComplete,
                    };

                projectsService.add(prod, function(status) {
                    if (status === 200) {
                        $modalInstance.close($scope.newProject);
                        $scope.newProject = undefined;
                    }
                    else {
                        toastr.error('Error occurred while adding project');
                    }
                });

            }
        };
    });

});
