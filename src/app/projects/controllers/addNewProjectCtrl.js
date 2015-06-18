define(['projects/module', 'toastr', 'projects/services/projectsService'], function(module, toastr) {

    'use strict';

    module.registerController('addNewProjectCtrl', function($scope, $modalInstance, projectsService) {

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };

        $scope.add = function() {
            if ($scope.newProject !== undefined) {
                projectsService.add($scope.newProject, function(status) {
                    if (status === 200) {
                        // $scope.projects.push($scope.newProject);
                        toastr.info($scope.newProject.name + ' added');
                        // $modalInstance.dismiss('cancel');
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
