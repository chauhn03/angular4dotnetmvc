module DemoModule.Services {
    "use strict";

    export interface ICourseService {
        get(): any;
    }

    export class CourseService implements ICourseService {
        static serviceId: string = "courseService";
        private resourceService: angular.resource.IResourceService;

        static $inject = ["$resource"];
        constructor($resource: angular.resource.IResourceService) {
            this.resourceService = $resource;
        }
        
        get(): any {
            return this.resourceService("/api/Courses").query();            
        }
    }
}