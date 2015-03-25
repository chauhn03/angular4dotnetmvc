module DemoModule.Controllers {
    "use strict";

    export interface ICourseScope extends ng.IScope {
        viewModel: ICourseController;
    }

    export interface ICourseController {
        courses: any;        
    }

    export class CourseController implements ICourseController {
        static controllerId: string = "courseController";
        static $inject = ['$scope', DemoModule.Services.CourseService.serviceId, '$location'];
        public courses: any;

        constructor(private $scope: ICourseScope, private courseService: DemoModule.Services.CourseService, private $location: ng.ILocationService) {
            $scope.viewModel = this;
            //alert('Course Controller');
            this.courses = courseService.get();
            
        }     
    }
} 