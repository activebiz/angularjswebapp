define(['projects/module', 'toastr', 'projects/services/projectsService'], function(module, toastr) {

    'use strict';

    module.registerController('projectCtrl', function($scope, $modal, projectsService, $templateCache) {
        $scope.title = 'Project List';

        $scope.open = function() {
            var modalInstance = $modal.open({
                templateUrl: 'app/projects/views/addNewProjectPopup.html',
                controller: 'addNewProjectCtrl'
            });
            modalInstance.result.then(function(newProject) {
                if (newProject != undefined) {
                    $scope.projects.push(newProject);
                    toastr.info('Project '+ newProject.name +' added');
                }
            });
        };

        projectsService.get(function(data) {
            var projectViewModel = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i] != undefined) {
                    var prod = {
                        id: data[i]["_id"],
                        name: data[i]["name"],
                        budget: data[i]["budget"],
                        isActive: data[i]["isActive"],
                        starts: data[i]["starts"],
                        ends: data[i]["ends"],
                        percentComplete: data[i]["percentComplete"]
                    };
                    projectViewModel.push(prod);
                }
            }
            $scope.projects = projectViewModel;
        });

        $scope.remove = function(index) {
            var project = $scope.projects[index]
            if (project !== undefined) {
                projectsService.remove(project, function(status) {
                    if (status === 200) {
                        $scope.projects.splice(index, 1);
                        toastr.info(project.name + ' removed');
                    }
                    else {
                        toastr.error('Error occurred while removing project');
                    }
                });

            }
        };
    });

});
