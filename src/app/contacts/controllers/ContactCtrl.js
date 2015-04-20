define(['app/contacts/module'],
    function (module) {
    'use strict';
    module.registerController('ContactCtrl', function ($scope, $interval) {
        $scope.message = "hello"
    });
});
