define(['projects/module',
	'angular',
	'angular-couch-potato',
	'angular-ui-router'
], function(module, ng, couchPotato) {
	"use strict";

	module.registerService('projectsService', ['$http', '$log', 'abSettings', function($http, $log, abSettings) {

		function getProjects(callback) {
			$http.get(abSettings.baseUrl + '/api/projects').success(function(data) {
				callback(data);
			}).error(function() {
				$log.log('Error');
				callback([]);
			});
		}

		function addProject(data) {

			$http.post(abSettings.baseUrl + '/api/projects/add', data)
				.success(function(data, status, headers, config) {})
				.error(function(data, status, headers, config) {
					$log.log('Error');
				});
		}

		function removeProject(data, callback) {
			$http.post(abSettings.baseUrl + '/api/projects/remove', data)
				.success(function(data, status, headers, config) {
					callback(status)
				})
				.error(function(data, status, headers, config) {
					callback(data);
				});
		}

		return {
			get: function(callback) {
				getProjects(callback);
			},
			add: function(data) {
				addProject(data);
			},
			remove: function(data, callback) {
				removeProject(data, callback);
			}
		}
	}])
})