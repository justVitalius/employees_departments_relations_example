var angular = require('angular');

module.exports = angular
.module('Core')
.constant('API', apiConstant());

function apiConstant(){
  return {
    EMPLOYEES_PATH: 'http://demo9655532.mockable.io/api/employees_departments/employees',
    DEPARTMENTS_PATH: 'http://demo9655532.mockable.io/api/employees_departments/departments',
  }
}