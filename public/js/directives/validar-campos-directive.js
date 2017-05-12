angular
    .module("app")
    .directive("validarCpf", function(validarCampos) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function($scope, $element, $attrs, ngModel) {
                $scope.$watch($attrs.ngModel, function(value) {
                    var isValid = validarCampos.cpf(value);
                    ngModel.$setValidity($attrs.ngModel, isValid);
                });
            }
        }
    });