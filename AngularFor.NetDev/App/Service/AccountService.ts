module DemoModule.Services {
    "use strict";

    export interface IAccountService {
        save(student: any) : any;
    }

    export class AccountService implements IAccountService {
        static serviceId: string = "accountService";
        private resourceService: angular.resource.IResourceService;

        static $inject = ["$resource"];
        constructor($resource: angular.resource.IResourceService) {
            this.resourceService = $resource;
        }

        save(student: any): any {
            return this.resourceService('/api/Account').save(student);
        }        
    }
}