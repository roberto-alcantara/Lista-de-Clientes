angular.module("app").service("croppie", function($http) {

	this.create = function (selector, options) {
		var element = $(selector);
		element.croppie(options);
	}
	this.bind = function (selector, options) {
		var element = $(selector);
		element.croppie('bind', options);
	}
	this.result = function (selector, options) {
		var element = $(selector);
		return element.croppie('result', options);
	}
	this.destroy = function (selector, options) {
		var element = $(selector);
		element.croppie('destroy');
	}
});
