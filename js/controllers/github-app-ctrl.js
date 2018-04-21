gitHubApp.controller('gitHubAppCtrl', function ($scope, githubRepoData) {

    $scope.submit = function () {
        //code
    };

    $scope.cancel = function () {
        $('.textarea-div').css('display', 'none');
        $('.add-bio').show();
    };

    $scope.addBio = function () {
        $('.add-bio').hide();
        $('.textarea-div').css('display', 'block');
    };

    $scope.getData = function () {
        githubRepoData.githubData().then(function (data) {
            $scope.githubData = data;
        });
    };
    $scope.getData();

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

});