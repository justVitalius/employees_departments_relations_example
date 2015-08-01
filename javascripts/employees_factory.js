var angular = require('angular');

module.exports = angular
.module('Employees')
.provider('employeesFactory', employeesProvider);

function employeesProvider(){
  return {
    $get: employeesFactory
  }
}


employeesFactory.$inject = ['$http', 'API', 'EmployeeFactory'];

var employeesMap = {};

function employeesFactory($http, API, EmployeeFactory){
  return {
    getAll: getAll,
    findById: findById
  }

  //////////////////////////////

  function getAll(){
    return $http.get(API.EMPLOYEES_PATH)
      .then(function(response){
        return response.data.map(function(employeeJson){
          employeesMap[employeeJson.id] = new EmployeeFactory(employeeJson);
          return employeesMap[employeeJson.id];
        });
      });
  }

  function findById(id){
    return employeesMap[id];
  }
}