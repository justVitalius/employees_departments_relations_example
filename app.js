var angular = require('angular');

angular.module('Core', []);
require('./javascripts/api_constant');



angular.module('Employees', ['Core']);
require('./javascripts/employee_factory');
require('./javascripts/employees_factory');

angular.module('Departments', ['Core']);
require('./javascripts/department_factory');
require('./javascripts/departments_factory');

angular.module('App', ['Employees', 'Departments']);

require('./javascripts/employees_departments_relations_config');
require('./javascripts/employees_departments_controller');

angular.module('App').run(function(){
  console.log('App is running');
})
