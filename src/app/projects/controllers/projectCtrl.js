define(['projects/module', 'toastr', 'projects/services/projectsService'], function(module, toastr) {

    'use strict';

    module.registerController('projectCtrl', function($scope, projectsService, $templateCache) {
        $scope.title = 'Project List';
        projectsService.get(function(data) {
            var projectViewModel = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i] != undefined) {
                    var prod = {
                        id: data[i]["_id"],
                        name: data[i]["name"],
                        budget: data[i]["budget"],
                        status: data[i]["status"],
                        starts: data[i]["starts"],
                        ends: data[i]["ends"]
                    };
                    projectViewModel.push(prod);
                }
            }
            $scope.projects = projectViewModel;
        });

        $scope.add = function() {
            if ($scope.newProject !== undefined) {
                projectsService.add($scope.newProject);
                $scope.projects.push($scope.newProject);
                toastr.info($scope.newProject.name + ' added!!');
                $scope.newProject = undefined;
            }
        };

        $scope.remove = function(index) {
            var project = $scope.projects[index]
            if (project !== undefined) {
                projectsService.remove(project, function(status) {
                    if (status === 200) {
                        $scope.projects.splice(index, 1);
                        toastr.info(project.name + ' removed!!');
                    }
                    else {
                        toastr.error('Error occurred while removing project');
                    }
                });

            }
        };
    });

});
