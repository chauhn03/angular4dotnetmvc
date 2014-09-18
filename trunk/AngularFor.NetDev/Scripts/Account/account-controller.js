registrationModule.controller('AccountController', function ($scope, accountRepository) {
    alert('init');
    $scope.save = function (student) {
        alert('Save');
        accountRepository.save(student);
    };
});