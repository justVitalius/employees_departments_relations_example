var angular = require('angular');

module.exports = angular
.module('Employees')
.provider('EmployeeFactory', employeeProvider);

function employeeProvider(){
  return {

    $get: function(){
      return EmployeeConstructor;
    }

  };

  //////////////////////////////

  function EmployeeConstructor(json){
    angular.extend(this, json);
  }
}