var registrationModule = angular.module('DemoModule', ['ngRoute', , 'ngResource']);

//registrationModule.config(['$routeProvider', function ($routeProvider) {

//    $routeProvider.when('/Registrations/Courses', { templateUrl: '/App/Partials/courses.html' }).
//        when('/Registrations/Instructors', { templateUrl: './template/instructors.html' }).
//        otherwise({
//        redirectTo: '/'
//    });
//}]);

registrationModule.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/Registrations/Courses', { templateUrl: '/App/Partials/courses.html', controller: DemoModule.Controllers.CourseController.controllerId });
    $routeProvider.when('/Registrations/Instructors', { templateUrl: '/App/Partials/instructors.html', controller: DemoModule.Controllers.InstructorController.controllerId });
    $routeProvider.when('/Registrations/CreateAccount', { templateUrl: '/App/Partials/create-account.html', controller: DemoModule.Controllers.AccountController.controllerId });
    $locationProvider.html5Mode(true);
});

registrationModule.service(DemoModule.Services.CourseService.serviceId, DemoModule.Services.CourseService);
registrationModule.controller(DemoModule.Controllers.CourseController.controllerId, DemoModule.Controllers.CourseController);

registrationModule.service(DemoModule.Services.InstructorsService.serviceId, DemoModule.Services.InstructorsService);
registrationModule.controller(DemoModule.Controllers.InstructorController.controllerId, DemoModule.Controllers.InstructorController);

registrationModule.service(DemoModule.Services.AccountService.serviceId, DemoModule.Services.AccountService);
registrationModule.controller(DemoModule.Controllers.AccountController.controllerId, DemoModule.Controllers.AccountController);