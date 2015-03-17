angular.module('schemaFormFontpicker', ['schemaForm']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {
    var fontpicker = function(name, schema, options) {
      if (schema.type === 'object' && schema.format === 'font') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'fontpicker';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.object.unshift(fontpicker);
    
    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'fontpicker',
    'directives/decorators/bootstrap/fontpicker/fontpicker.html');
  }]);
