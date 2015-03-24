module DemoModule.Services {
    "use strict";

    export interface IInstructorService {
        get(): any;
    }

    export class InstructorsService implements IInstructorService {
        static serviceId: string = "instructorService";
        private resourceService: angular.resource.IResourceService;

        static $inject = ["$resource"];
        constructor($resource: angular.resource.IResourceService) {
            this.resourceService = $resource;
        }

        get(): any {
            return this.resourceService("/api/Instructors").query();
        }
    }
}