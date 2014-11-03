registrationModule.controller('AccountController', function ($scope, accountRepository, $location) {
    $scope.save = function (student) {
        $scope.error = false;
        accountRepository.save(student).then(
            function () { $location.url("/Registrations/Courses"); },
            function () {
                $scope.error = true;
            }
            );
    };
});