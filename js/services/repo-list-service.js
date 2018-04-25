gitHubApp.service('repoListDataService', function ($http, $q) {
    var url = 'json/'
    this.getRepoListData = function () {
        var deferred = $q.defer();
        var fileName = 'repositories.json'

        $http({
            method: 'GET',
            url: url + fileName
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function (data, status) {
            deferred.reject(status);
        });
        return deferred.promise;
    }
})