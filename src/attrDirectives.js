/*
  This is a fix for using dynamic values for svg attributes without errors.
  From this comment on github: https://github.com/angular/angular.js/issues/1050#issuecomment-9650293
*/
angular.forEach(['x', 'y', 'width', 'height'], function(name) {
  var ngName = 'ng' + name[0].toUpperCase() + name.slice(1);
  angular.module('schemaForm').directive(ngName, function() {
    return function(scope, element, attrs) {
      attrs.$observe(ngName, function(value) {
        attrs.$set(name, value);
      });
    };
  });
});
