angular
	.module("app")
	.service("validarCampos", function() {
		this.cpf = function(value) {
			if(!value) return false;
	        value = value.replace('.', '').replace('.', '').replace('-', '');
	        if(value.length == 11) {
	            var tot = 0;
	            for(var i = 0; i < 9; i++) tot += value[i] * (10 - i);
	            var temp = (tot * 10)%11;
	            if(temp != value[9]) return false;
	            tot = 0;
	            for(var i = 0; i < 10; i++) tot += value[i] * (11 - i);
	            var temp = (tot * 10)%11;
	            if(temp != value[10]) return false;
	            return true;
	        } else {
	            return false;
	        }
		}
		this.email = function(value) {
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  			return regex.test(value);
		}
	});