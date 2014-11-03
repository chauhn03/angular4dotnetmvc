registrationModule.factory('accountRepository', function ($http, $q) {
    return {
        save: function (student) {
            var deferred = $q.defer();
            $http.post('/Account/Save', student).success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        }
    };
});