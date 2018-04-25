gitHubApp.service('contributionsDataService', function ($http, $q) {
    var url = 'json/';

    this.getcontributionsData = function () {

        var fileName = 'contributions-graph-data.json';
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: url + fileName,
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function (data,status) {
            deferred.reject(data);
        });
        return deferred.promise;
    }
})