var registrationModule = angular.module("registrationModule", [ 'ngRoute', 'ngResource'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/Registrations/Courses', { templateUrl: '/template/courses.html', controller: 'CoursesController' });
    $routeProvider.when('/Registrations/Instructors', { templateUrl: '/template/instructors.html', controller: 'InstructorsController' });
    $routeProvider.when('/Registrations/CreateAccount', { templateUrl: '/template/create-account.html', controller: 'AccountController' });
    $locationProvider.html5Mode(true);
});