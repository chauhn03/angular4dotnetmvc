registrationModule.controller("CoursesController", function ($scope, coursesRepository) {
    coursesRepository.get().then(function(courses) {
        $scope.courses = courses;
    });
});