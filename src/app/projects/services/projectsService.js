define(['app'], function(app){
    "use strict";

	    return app.factory('projectsService', function($http,$log) {

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