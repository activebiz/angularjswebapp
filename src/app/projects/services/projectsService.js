define(['projects/module',
	'angular',
	'angular-couch-potato',
	'angular-ui-router'
], function(module, ng, couchPotato) {
	"use strict";

	module.registerService('projectsService', function($http, $log) {

		function getProjects(callback) {

			$http.get('https://angularjswebapp-activebiz.c9.io/projects').success(function(data) {

				callback(data);

			}).error(function() {

				$log.log('Error');
				callback([]);

			});

		}

		function addProject(data) {

			$http.post('https://angularjswebapp-activebiz.c9.io/projects/add', data)
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