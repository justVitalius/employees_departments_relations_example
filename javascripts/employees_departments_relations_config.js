var angular = require('angular');

/////////////////////////////////////////////
//  Апгрейдим сотрудников на наличие департамента

angular.module('App').config(function($provide){
  $provide.decorator('EmployeeFactory', EmployeeFactoryDelegate);
});

EmployeeFactoryDelegate.$inject = ['$delegate', '$injector']

function EmployeeFactoryDelegate($delegate, $injector){
  $delegate.prototype.department = function(){
    return $injector.get('departmentsFactory').findById(this.departmentId);
  }
  return $delegate;
}


///////////////////////////////////////////
// Апгрейдим департаменты на наличие сотрудников

angular.module('App').config(function($provide){
  $provide.decorator('DepartmentFactory', DepartmentFactoryDelegate);
});

DepartmentFactoryDelegate.$inject = ['$delegate', '$injector']

function DepartmentFactoryDelegate($delegate, $injector){
  $delegate.prototype.employees = function(){
    return this.employeesIds.map(function(employeeId){
      return $injector.get('employeesFactory').findById(employeeId);
    });
    
  }
  return $delegate;
}



