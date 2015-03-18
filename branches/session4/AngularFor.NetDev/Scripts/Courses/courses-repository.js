registrationModule.factory('coursesRepository', function($http, $q) {
    return {
        get: function() {
            var deferred = $q.defer();
            $http.get('/api/Courses').success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        }
    };
});