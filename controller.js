angular.module('userProfiles').controller('MainController', function($scope, myService) {

    $scope.fetchBluths = function () {
      $scope.bluths = myService.fetchData()
    }

    $scope.addBluth = function (newUser) {
      $scope.bluths = myService.put(newUser)
    }
})
