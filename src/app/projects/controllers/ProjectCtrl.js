define(['projects/module', 'projects/services/projectsService'], function (module) {

    'use strict';

    module.registerController('ProjectCtrl', function ($scope,projectsService) {
        $scope.title = 'Project List';
        projectsService.get(function(data){
			$scope.projects = data.data;
		});
    });

});
