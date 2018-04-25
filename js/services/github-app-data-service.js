gitHubApp.service('githubRepoData', function ($http, $q) {
    this.githubData = function () {
        var deferred = $q.defer();
        var url = 'json/'
        var fileName = 'overview-data.json'
        $http({
            method: 'GET',
            url: url + fileName,
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function (data, status) {
            deferred.reject(status)
        });
        return deferred.promise;
    };
});