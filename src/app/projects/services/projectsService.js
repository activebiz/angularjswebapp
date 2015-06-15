define(['projects/module',
	'angular',
	'angular-couch-potato',
	'angular-ui-router'
], function(module, ng, couchPotato) {
	"use strict";

	module.registerService('projectsService', function($http, $log) {

		function getProjects(callback) {

			$http.get('http://meandemo.activebiz.co.uk/api/projects').success(function(data) {

				callback(data);

			}).error(function() {

				$log.log('Error');
				callback([]);

			});

		}

		function addProject(data) {

			$http.post('http://meandemo.activebiz.co.uk/api/projects/add', data)
				.success(function(data, status, headers, config) {})
				.error(function(data, status, headers, config) {
					$log.log('Error');
				});
		}

		return {
			get: function(callback) {
				getProjects(callback);
			},
			add: function(data) {
				addProject(data);
			}
		}
	})
})