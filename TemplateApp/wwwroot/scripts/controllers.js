var blockerIpApp = angular.module('TemplateApp', []);

blockerIpApp.controller('TemplateAppCtrl', function ($scope, $http, $templateCache) {
    $scope.Message = [];

    $http({
        method: 'GET',
        url: '/api/TemplateAppHello?name=' + 'John',
        cache: $templateCache
    }).
    success(function (data, status, headers, config) {
        $scope.Message = data;
        console.log(data);
    }).
    error(function (data, status) {
        console.log("Request Failed");
    });
});
