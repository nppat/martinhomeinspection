app.controller('BackgroundController', function($scope) {
    $scope.mainBGImage = {
        'background': "url('/static/img/house.jpg') no-repeat center center",
        'background-size': 'cover',
        'height': '700px'
    };
    $scope.main = {
        'padding-top': '0%',
        'color' : 'white'
    }
});
