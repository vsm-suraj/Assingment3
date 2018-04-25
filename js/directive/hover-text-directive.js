gitHubApp.directive('hoverText', function () {
    return function (scope, element) {
        element.on('mousemove', function (e) {
            var dataCount = $(this).attr('data-count');
            var dataDate = $(this).attr('data-date');
            var contribution = 'No contribution';
            if(dataCount != 0){
                contribution = dataCount + " contributions";
            }
            var left = element[0].offsetLeft-100;
            var top = element[0].offsetTop-40;
            $('.hover').css('top',top+'px').css('left',left+'px').html('<span class="contribution-text">' + contribution + '</span>'+ '<span class="data-date">' + ' on ' + dataDate + '</span>').show();
        }).bind('mouseout', function () {
            $('.hover').hide();
        })
    }
})