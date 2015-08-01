var angular = require('angular');

module.exports = angular
  .module('Departments')
  .provider('departmentsFactory', departmentsProvider);

function departmentsProvider(){
  return {
    $get: departmentsFactory
  }
}

departmentsFactory.$inject = ['$http', 'API', 'DepartmentFactory'];

var departmentsMap = {};

function departmentsFactory($http, API, DepartmentFactory){

  var service = {
    getAll: getAll,
    findById: findById
  };

  return service;

  //////////////////////////////

  function getAll(){
    return $http.get(API.DEPARTMENTS_PATH)
      .then(function(response){
        return response.data.map(function(departmentJson){
            departmentsMap[departmentJson.id] = new DepartmentFactory(departmentJson);
            return departmentsMap[departmentJson.id]
        });
      });
  }

  function findById(id){
    return departmentsMap[id];
  }
}