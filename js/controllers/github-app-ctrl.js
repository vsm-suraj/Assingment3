gitHubApp.controller('gitHubAppCtrl', function ($scope, githubRepoData, repoListDataService, contributionsDataService) {

    /* to get the github overview data */
    $scope.getData = function () {
        githubRepoData.githubData().then(function (data) {
            $scope.githubData = data;
        });
    };
    $scope.getData();

    /* to get the ropositories list */
    repoListDataService.getRepoListData().then(function (data) {
        $scope.repoList = data;
    })

    /* to get contributions data from service */
    contributionsDataService.getcontributionsData().then(function (data) {
        $scope.contributionsData = data;
        console.log(data);
    })

    $(window).scroll(function () {
        if (window.scrollY > 100) {
            $('.main-content-nav-bar').css('z-index', '111').css('position', 'fixed').css('top', '0');
        } else {
            $('.main-content-nav-bar').css('position', 'static')
        };
        if (window.scrollY > 350) {
            $('.scroll-bar').css('display', 'block').css('background', 'white');
        } else {
            $('.scroll-bar').css('display', 'none')
        };
    });

    
    $scope.cancel = function () {
        $('.textarea-div').css('display', 'none');
        $('.add-bio').show();
    };

    $scope.addBio = function () {
        $('.add-bio').hide();
        $('.textarea-div').css('display', 'block');
    };
    $scope.submit = function () {
        //code
    };

});