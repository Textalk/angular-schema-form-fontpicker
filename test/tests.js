/* jshint expr: true */

chai.should();

describe('Schema form', function() {

  describe('directive', function() {
    beforeEach(module('templates'));
    beforeEach(module('schemaForm'));
    beforeEach(
      //We don't need no sanitation. We don't need no though control.
      module(function($sceProvider) {
        $sceProvider.enabled(false);
      })
    );

    it('should return correct form type for format "font"', function() {
      inject(function($compile, $rootScope, schemaForm) {
        var stringSchema = {
          type: 'object',
          properties: {
            font: {
              type: 'string',
            }
          }
        };

        var colorSchema = {
          type: 'object',
          properties: {
            font: {
              type: 'object',
              format: 'font'
            }
          }
        };

        schemaForm.defaults(stringSchema).form[0].type.should.be.eq('text');
        schemaForm.defaults(colorSchema).form[0].type.should.be.eq('fontpicker');
      });
    });

  });
});
