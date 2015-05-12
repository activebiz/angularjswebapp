define(['projects/module',
    'angular',
    'angular-couch-potato',
    'angular-ui-router'
], function(module, ng, couchPotato) {
    "use strict";

	    module.registerService('projectsService', function($http,$log) {

		function getProjects(callback){

			$http.get('api/project-list.json').success(function(data){

				callback(data);
					
			}).error(function(){

				$log.log('Error');
				callback([]);

			});

		}
		return{
			get:function(callback){
				getProjects(callback);
			}
		}
	})
})