module DemoModule.Controllers {
    "use strict";

    export interface IAccountScope extends ng.IScope {
        viewModel: IAccountController;
    }

    export interface IAccountController {
        error: boolean;
        save(student: any);
    }

    export class AccountController implements IAccountController {
        error: boolean = false;
        static controllerId: string = "accountController";
        static $inject = ['$scope', DemoModule.Services.AccountService.serviceId, '$location'];

        constructor(private $scope: IAccountScope, private accountService: DemoModule.Services.IAccountService, private $location: ng.ILocationService) {
            $scope.viewModel = this;                                            
        }

        save(student: any) {                        
            // success call back is running asynchronously so the value of this is different inside. Try binding the function call back with this.            
            var bindSaveCompleted = angular.bind(this, this.saveCompleted);
            var bindSaveError = angular.bind(this, this.saveError);            

            this.accountService.save(student).$promise.then(bindSaveCompleted, bindSaveError);
        }

        private saveCompleted() {
            location.href = "/Registrations/Courses";
        }

        private saveError() {                  
            this.error = true;
        }
    }
} 