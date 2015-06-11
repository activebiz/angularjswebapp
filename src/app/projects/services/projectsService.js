define(['projects/module',
    'angular',
    'angular-couch-potato',
    'angular-ui-router'
], function(module, ng, couchPotato) {
    "use strict";

	    module.registerService('projectsService', function($http,$log) {

		function getProjects(callback){

			$http.get('https://angularjswebapp-activebiz.c9.io/projects').success(function(data){

				callback(data);
					
			}).error(function(){

				$log.log('Error');
				callback([]);

			});

		}
		
		function addProject(data){

			$http.post('https://angularjswebapp-activebiz.c9.io/projects/add', data)
  				.success(function(data, status, headers, config) {
  					debugger;
    			// this callback will be called asynchronously
    			// when the response is available
  				})
  				.error(function(data, status, headers, config) {
  					debugger;
  				$log.log('Error');
    			// called asynchronously if an error occurs
    			// or server returns response with an error status.
  				});
		}
		
		return{
			get:function(callback){
				getProjects(callback);
			},
			add:function(data){
				addProject(data);
			}
		}
	})
})