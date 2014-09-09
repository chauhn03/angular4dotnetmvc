var registrationModule = angular.module("registrationModule", ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/Registrations/Courses', { templateUrl: '/template/courses.html', controller: 'CoursesController' });
    $routeProvider.when('/Registrations/Instructors', { templateUrl: '/template/instructors.html', controller: 'InstructorsController' });
    $locationProvider.html5Mode(true);
});