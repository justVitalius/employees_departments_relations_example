var angular = require('angular');

module.exports = angular
  .module('App')
  .controller('EmployeesDepartmentsController', employeesDepartmentsController);

employeesDepartmentsController.$inject = ['$scope', 'employeesFactory', 'departmentsFactory', '$timeout'];

function employeesDepartmentsController($scope, employeesFactory, departmentsFactory, $timeout){

  $scope.employees = [];
  $scope.departments = [];

  activate();

  ///////////////////////////////////

  function activate(){
    employeesFactory.getAll().then(function(employees){
      $scope.employees = employees;
    });

    $timeout(function(){
      departmentsFactory.getAll().then(function(departments){
        $scope.departments = departments;
      });
    }, 4000);

  };

}
