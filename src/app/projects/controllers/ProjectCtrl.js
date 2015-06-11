define(['projects/module', 'toastr', 'projects/services/projectsService'], function(module, toastr) {

    'use strict';

    module.registerController('ProjectCtrl', function($scope, projectsService, $templateCache) {
        $scope.title = 'Project List';
        projectsService.get(function(data) {
            var projectViewModel = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i] != undefined) {
                    var prod = {
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
    });

});
