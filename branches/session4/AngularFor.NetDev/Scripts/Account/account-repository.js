registrationModule.factory('accountRepository', function ($resource) {
    return {
        save: function (student) {            
            return $resource('/Account/Save').save(student);            
        }
    };
});