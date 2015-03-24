module DemoModule.Controllers {
    "use strict";

    export interface IInstructorScope extends ng.IScope {
        viewModel: IInstructorController;
    }

    export interface IInstructorController {
        instructors: any;
    }

    export class InstructorController implements IInstructorController {
        static controllerId: string = "instructorController";
        static $inject = ['$scope', DemoModule.Services.InstructorsService.serviceId, '$location'];
        public instructors: any;

        constructor(private $scope: IInstructorScope, private instructorService: DemoModule.Services.InstructorsService, private $location: ng.ILocationService) {
            $scope.viewModel = this;
            //alert('Course Controller');
            this.instructors = instructorService.get();
        }
    }
} 