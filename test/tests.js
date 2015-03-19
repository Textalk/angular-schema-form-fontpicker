/* jshint expr: true */

chai.should();

describe('Schema form', function() {

  describe('directive', function() {
    beforeEach(module('templates'));
    beforeEach(module('schemaForm'));
    beforeEach(module('schemaFormFontpicker'));

    beforeEach(
      //We don't need no sanitation. We don't need no though control.
      module(function($sceProvider) {
        $sceProvider.enabled(false);
      })
    );

    it('should return correct form type for format "font"', function() {
      inject(function(schemaForm) {
        var stringSchema = {
          type: 'object',
          properties: {
            font: {
              type: 'string',
            }
          }
        };

        var fontSchema = {
          type: 'object',
          properties: {
            font: {
              type: 'object',
              format: 'font'
            }
          }
        };
        schemaForm.defaults(stringSchema).form[0].type.should.be.eq('text');
        schemaForm.defaults(fontSchema).form[0].type.should.be.eq('fontpicker');
      });
    });

    it('should prepare for interpolation of loadError', function() {
      inject(function($compile, $rootScope) {
        var fontSchema = {
          type: 'object',
          properties: {
            font: {
              type: 'object',
              format: 'font'
            }
          }
        };


        var scope = $rootScope.$new();
        scope.schema = fontSchema;
        scope.form = ['*'];
        scope.model = {};

        var el = angular.element('<div sf-schema="schema" sf-form="form" sf-model="model"></div>');
        $compile(el)(scope);

        scope.$apply();

        var loadError = angular.element(el[0].querySelector('.fontpicker')).scope().loadError;
        loadError.should.be.a('function');
        loadError({fontName:'foo'}).should.equal('foo could not be loaded.');
      });
    });
  });
});
