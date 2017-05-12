angular.module("app").directive('dateInput', function () {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function(value) {
          if(!value) return;
          return new Date(value);
        });
        ngModel.$formatters.push(function(value) {
          if(!value) return;
          var fechaactual = new Date(value);
          return fechaactual;
        });
      }
    };
  })