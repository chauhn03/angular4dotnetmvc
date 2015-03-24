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
            //alert('Course Controller');
            //this.courses = courseService.get();
        }

        save(student: any)
        {                        
            //alert(student);
            this.accountService.save(student).$promise.then(this.saveCompleted, this.saveError);
        }

        private saveCompleted()
        {
            location.href = "/Registrations/Courses";                     
        }

        private saveError()
        {            
            this.error = true;
        }
    }
} 