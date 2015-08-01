var angular = require('angular');

module.exports = angular
.module('Departments')
.provider('DepartmentFactory', departmentProvider);

function departmentProvider(){
  return {

    $get: function(){
      return DepartmentConstructor;
    }

  };

  //////////////////////////////

  function DepartmentConstructor(json){
    angular.extend(this, json);
  }
}