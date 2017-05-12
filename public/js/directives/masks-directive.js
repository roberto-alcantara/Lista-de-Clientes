angular
    .module("app")
    .directive("telefone", function() {
        return {
            require: '?ngModel',
            link : function(scope, element, attrs, ngModelCtrl) {
                var options =  {
                    onKeyPress: function(telefone, event, currentField, options){
                    var masks = ['(00) 0000-00009', '(00) 00000-0000'];
                    var mask = (telefone.length>14) ? masks[1] : masks[0];
                    $(element).mask(mask, options);
                    ngModelCtrl.$setViewValue(element[0].value);
                    ngModelCtrl.$render();
                }};
                $(element).mask('(00) 0000-00009', options);
            }
        }
    })
    .directive("cep", function() {
        return {
            require: '?ngModel',
            link : function(scope, element, attrs, ngModelCtrl) {
                var options = {
                    onKeyPress: function(cep, event, currentField, options){
                        ngModelCtrl.$setViewValue(element[0].value);
                        ngModelCtrl.$render();
                    }
                }
                $(element).mask('00000-000', options);
            }
        }
    })
    .directive("cpf", function() {
        return {
            link : function(scope, element, attrs) {
                $(element).mask('000.000.000-00');
            }
        }
    });