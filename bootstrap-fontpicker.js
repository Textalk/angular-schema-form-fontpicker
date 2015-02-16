angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/fontpicker/fontpicker.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError()}\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <div font-picker=\"{{form}}\"\n    ng-model=\"$$value$$\"\n    style=\"background-color: white\"\n    schema-validate=\"form\"></div>\n  <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/fontpicker/fontpickerdirective.html","<div class=\"fontpicker\">\n  <div class=\"alert alert-danger\" role=\"alert\" ng-show=\"failedFont.length > 0\">\n    {{failedFont}} {{strings.loadError}}\n  </div>\n  <div class=\"row\" ng-if=\"paneButtons.preset.show && paneButtons.custom.show\">\n    <div class=\"btn-group col-xs-12\" role=\"group\">\n      <button type=\"button\" ng-click=\"switchPane(\'preset\')\" ng-class=\"{\'btn-primary\': activePane === \'preset\', \'btn-default\': activePane !== \'preset\'}\" class=\"btn\">{{paneButtons.preset.text}}</button>\n      <button type=\"button\" ng-click=\"switchPane(\'custom\')\" ng-class=\"{\'btn-primary\': activePane === \'custom\', \'btn-default\': activePane !== \'custom\'}\" class=\"btn\">{{paneButtons.custom.text}}</button>\n    </div>\n  </div>\n  <div class=\"row\" ng-if=\"activePane === \'custom\'\">\n    <p class=\"col-xs-12 col-md-8\" ng-bind-html=\"strings.customFontDesc\"></p>\n  </div>\n  <div class=\"row quote-row\" ng-if=\"preview.showTextAndSizeInput\">\n    <div class=\"col-xs-1\">\n      <!-- SVG for a citation symbol -->\n      <svg class=\"label quoteicon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 796.455 736.859\"><path fill=\"#231F20\" d=\"M368.938 45.93s.79-34.072-6.21-40-43-5.93-43-5.93h-270s-28.272-2.07-39 5.93-10.73 40-10.73 40v272s-2.27 19 7.73 28 35 7 35 7h219s9 84-27 162-132 125-134 133 47 77.07 56 83 137.79-83 174-162 38.21-151 38.21-173v-350zM796.43 45.93s.788-34.072-6.212-40-43-5.93-43-5.93h-270s-28.272-2.07-39 5.93-10.73 40-10.73 40v272s-2.27 19 7.73 28 35 7 35 7h219s9 84-27 162-132 125-134 133 47 77.07 56 83 137.79-83 174-162 38.21-151 38.21-173v-350z\"/></svg>\n    </div>\n    <div class=\"col-xs-11 col-md-7\">\n      <input class=\"form-control quote\" ng-model=\"preview.text\"></input>\n    </div>\n    <div class=\"col-md-4 fontsize hidden-sm hidden-xs\">\n      <div ng-repeat=\"(key, size) in preview.sizes\" ng-click=\"preview.defaultSize = size\" class=\"sizebutton pointer\" ng-style=\"{\'width\': Math.floor(100/preview.sizes.length)+\'%\'}\" ng-class=\"{active: preview.defaultSize === size}\">\n        <!-- SVG for a font symbol -->\n        <svg class=\"fonticon\" xmlns=\"http://www.w3.org/2000/svg\" ng-width=\"{{13+(key*5)}}\" ng-height=\"{{13+(key*5)}}\" viewBox=\"83.178 0 645.914 736.859\" enable-background=\"new 83.178 0 645.914 736.859\"><path d=\"M701.562 692.248c-8.223-4.176-15.68-8.213-17.7-10.49-7.02-7.908-7.378-14.375-10.718-23.617-5.377-14.878-12.34-29.087-18.02-44.06-20.12-53.058-40.57-106.165-62.43-158.575-50.47-121.017-97.237-243.76-145.753-365.585-11.266-28.29-22.4-56.65-33.664-84.93 0 0-28.12-6.372-30.346 0-25.59 73.21-83.14 217.562-83.14 217.562L164.07 576.81l-28.037 79.646s-12.376 26.664-22.376 36.188c-3.213 3.06-30.384 17.94-30.48 15.95L84.43 734.7l163.298.002s.178-18.436 0-27.645c.035 1.785-33.015-11.973-36-14.73-10.07-9.297-19.68-25.517-15-38.907 3.49-9.984 70-189.396 70-189.396h209s61.924 174.53 66 182.744c19.782 39.865-15.52 58.564-49 59.75l1 28.182h235.364s-1.14-27.965-1.147-28.182c-.06-1.45-14.077-8.018-26.383-14.27zM278.27 425.982l95.348-247.48 91.11 247.428-186.458.052z\"/></svg>\n        <br>{{size}}pt\n      </div>\n    </div>\n  </div>\n  <div class=\"row type-row\" ng-show=\"activePane === \'preset\'\">\n    <div class=\"col-xs-1\">\n      <!-- SVG for a font symbol -->\n      <svg class=\"label fonticon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"83.178 0 645.914 736.859\" enable-background=\"new 83.178 0 645.914 736.859\"><path fill=\"#231F20\" d=\"M701.562 692.248c-8.223-4.176-15.68-8.213-17.7-10.49-7.02-7.908-7.378-14.375-10.718-23.617-5.377-14.878-12.34-29.087-18.02-44.06-20.12-53.058-40.57-106.165-62.43-158.575-50.47-121.017-97.237-243.76-145.753-365.585-11.266-28.29-22.4-56.65-33.664-84.93 0 0-28.12-6.372-30.346 0-25.59 73.21-83.14 217.562-83.14 217.562L164.07 576.81l-28.037 79.646s-12.376 26.664-22.376 36.188c-3.213 3.06-30.384 17.94-30.48 15.95L84.43 734.7l163.298.002s.178-18.436 0-27.645c.035 1.785-33.015-11.973-36-14.73-10.07-9.297-19.68-25.517-15-38.907 3.49-9.984 70-189.396 70-189.396h209s61.924 174.53 66 182.744c19.782 39.865-15.52 58.564-49 59.75l1 28.182h235.364s-1.14-27.965-1.147-28.182c-.06-1.45-14.077-8.018-26.383-14.27zM278.27 425.982l95.348-247.48 91.11 247.428-186.458.052z\"/></svg>\n    </div>\n    <div class=\"col-xs-11\">\n      <div class=\"dropdown\">\n        <button ng-click=\"dropdown = !dropdown\" class=\"btn btn-default dropdown-toggle\" ng-style=\"{\'font-family\': modelValues.preset.name == \'Font\' ? \'\' : modelValues.preset.name }\" style=\"min-width: 100%;\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-expanded=\"true\"> {{modelValues.preset.name || strings.dropdown}} <span class=\"caret\"></span> </button>\n        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\" ng-show=\"dropdown\">\n          <li ng-click=\"chooseFont(font)\" role=\"presentation\" style=\"font-family: \'{{font.name}}\'\" ng-repeat=\"(key, font) in fontlist\">\n            <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">{{font.name}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"row any-type-row\" ng-show=\"activePane === \'custom\'\">\n    <div class=\"col-xs-1\">\n      <!-- SVG for a font symbol -->\n      <svg class=\"label fonticon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"83.178 0 645.914 736.859\" enable-background=\"new 83.178 0 645.914 736.859\"><path fill=\"#231F20\" d=\"M701.562 692.248c-8.223-4.176-15.68-8.213-17.7-10.49-7.02-7.908-7.378-14.375-10.718-23.617-5.377-14.878-12.34-29.087-18.02-44.06-20.12-53.058-40.57-106.165-62.43-158.575-50.47-121.017-97.237-243.76-145.753-365.585-11.266-28.29-22.4-56.65-33.664-84.93 0 0-28.12-6.372-30.346 0-25.59 73.21-83.14 217.562-83.14 217.562L164.07 576.81l-28.037 79.646s-12.376 26.664-22.376 36.188c-3.213 3.06-30.384 17.94-30.48 15.95L84.43 734.7l163.298.002s.178-18.436 0-27.645c.035 1.785-33.015-11.973-36-14.73-10.07-9.297-19.68-25.517-15-38.907 3.49-9.984 70-189.396 70-189.396h209s61.924 174.53 66 182.744c19.782 39.865-15.52 58.564-49 59.75l1 28.182h235.364s-1.14-27.965-1.147-28.182c-.06-1.45-14.077-8.018-26.383-14.27zM278.27 425.982l95.348-247.48 91.11 247.428-186.458.052z\"/></svg>\n    </div>\n    <div class=\"col-xs-7 col-md-9\">\n      <input class=\"form-control\" ng-model=\"custom.input\"></input>\n    </div>\n    <div class=\"col-xs-4 col-md-2\">\n      <button class=\"anytype-btn btn btn-default col-xs-1\" type=\"button\" ng-disabled=\"custom.loading\" ng-click=\"loadCustomFont()\">{{strings.loadButton}}</button>\n    </div>\n  </div>\n  <style>\n    .fontpicker .previewRow {\n      font-size: {{preview.defaultSize}}pt;\n      font-family: \'{{modelValues.current.name}}\'\n    }\n  </style>\n  <div class=\"row\" ng-if=\"modelValues.current.name\">\n    <div class=\"col-xs-11 preview\">\n      <p ng-click=\"((key === 0 && preview.styles.length > 1) && togglePreview())\" ng-hide=\"previewExpanded === false && key > 0\" ng-repeat=\"(key, style) in preview.styles\"\n         class=\'previewRow\'\n         ng-style=\"angular.extend(style, {\'cursor\': (key === 0 && preview.styles.length > 1) ? \'pointer\' : \'default\'})\">\n        {{preview.text}}\n      </p>\n    </div>\n    <div ng-click=\"togglePreview()\" class=\"col-xs-1 caretsign pointer\">{{previewExpanded == true ? \'&#x25B2;\' : \'&#x25BC;\'}}</div>\n  </div>\n</div>\n\n\n");}]);
angular.module('schemaFormFontpicker', ['schemaForm']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var fontpicker = function(name, schema, options) {
    if (schema.type === 'object' && schema.format == 'font') {
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


/*global WebFont: false */
angular.module('schemaFormFontpicker').directive('fontPicker',  ['$q', function($q) {
  'use strict';
  return {
    restrict: 'AE',
    scope: true,
    require: 'ngModel',
    templateUrl: 'directives/decorators/bootstrap/fontpicker/fontpickerdirective.html',
    link: function(scope, element, attrs, ngModel) {

      var fonturl = 'http://fonts.googleapis.com/css?family=';
      var modelValues = {};
      scope.Math = window.Math;
      scope.angular = angular;
      scope.modelValues = modelValues;
      scope.activePane = 'preset';
      scope.dropdown = false;
      scope.translations = {};
      scope.previewExpanded = true;
      scope.custom = {
        input: '',
        loading: false
      };

      // Take in the options once, then start evaluating them.
      var once = scope.$watch(attrs.fontPicker, function(form) {
        if (form !== undefined) {
          scope.fontlist = form.fontlist;
          scope.preview = form.preview;
          scope.strings = form.strings;
          scope.paneButtons = form.paneButtons;

          /* Setting defaults for form options */
          if (!scope.preview) { scope.preview = {}; }

          if (!scope.preview.sizes) { scope.preview.sizes = [12, 18, 24, 48]; }
          if (!scope.preview.defaultSize) { scope.preview.defaultSize = 18; }
          if (scope.preview.showTextAndSizeInput === undefined) {
            scope.preview.showTextAndSizeInput = true;
          }
          if (!scope.preview.text) {
            scope.preview.text = 'The quick brown fox jumps over the lazy dog';
          }
          if (!scope.preview.styles) {
            scope.preview.styles = [
              {},
              {'font-weight': 'bold'},
              {'font-style': 'italic'}
            ];
          }

          if (!scope.strings) { scope.strings = {}; }
          if (!scope.strings.loadButton) { scope.strings.loadButton = 'Load'; }
          if (!scope.strings.dropdown) { scope.strings.dropdown = 'Choose font'; }
          if (!scope.strings.loadError) { scope.strings.loadError = 'could not be loaded.'; }
          if (!scope.strings.customFontDesc) {
            scope.strings.customFontDesc = 'You can load any font from <a href="https://www.' +
            'google.com/fonts">Google Fonts</a>. Simply open any font by pressing the "Quick Use' +
            ' (right arrow)" button in the list. Make any alterations you wish in steps 1 and 2,' +
            ' then copy the "Standard" link from step 3. When you hit load the font is loaded and' +
            ' can be previewed. When you need to use the font, check step 4.';
          }

          if (!scope.paneButtons) { scope.paneButtons = {}; }
          if (!scope.paneButtons.preset) { scope.paneButtons.preset = {}; }
          if (!scope.paneButtons.custom) { scope.paneButtons.custom = {}; }
          if (!scope.paneButtons.preset.text) { scope.paneButtons.preset.text = 'Preset fonts'; }
          if (!scope.paneButtons.custom.text) { scope.paneButtons.custom.text = 'Load font'; }
          if (scope.paneButtons.preset.show === undefined) { scope.paneButtons.preset.show = true; }
          if (scope.paneButtons.custom.show === undefined) { scope.paneButtons.custom.show = true; }

          if (!scope.fontlist) {
            scope.fontlist = [
              {name: 'Old Standard TT',      url: fonturl + 'Old+Standard+TT:400,400italic,700'},
              {name: 'Josefin Slab',         url: fonturl + 'Josefin+Slab:300,400,700'},
              {name: 'Arvo',                 url: fonturl + 'Arvo:400,700'},
              {name: 'Vollkorn',             url: fonturl + 'Vollkorn:400,700'},
              {name: 'Abril Fatface',        url: fonturl + 'Abril+Fatface'},
              {name: 'Playfair Display SC',  url: fonturl + 'Playfair+Display+SC'},
              {name: 'Open Sans',            url: fonturl + 'Open+Sans:400,700,300,800'},
              {name: 'Lato',                 url: fonturl + 'Lato:100,300,400,700,900'},
              {name: 'Ubuntu',               url: fonturl + 'Ubuntu:300,400,500,700'},
              {name: 'PT Sans',              url: fonturl + 'PT+Sans:400,700'},
              {name: 'Droid Sans',           url: fonturl + 'Droid+Sans:400,700'},
              {name: 'Roboto',               url: fonturl + 'Roboto:400,300,700,900'},
              {name: 'Londrina Solid',       url: fonturl + 'Londrina+Solid'},
              {name: 'Indie Flower',         url: fonturl + 'Indie+Flower'},
              {name: 'Nothing You Could Do', url: fonturl + 'Nothing+You+Could+Do'},
              {name: 'Dancing Script',       url: fonturl + 'Dancing+Script'},
              {name: 'Satisfy',              url: fonturl + 'Satisfy'},
              {name: 'Calligraffitti',       url: fonturl + 'Calligraffitti'}
            ];
          }

          // Load initial fonts for preset list.
          loadFonts(scope.fontlist, 'preset');
          ngModel.$render();
          once();
        }

      });

      /* Genereal functions */
      // Take care of initial model value
      ngModel.$render = function() {
        var presetFont = false;
        if (scope.fontlist === undefined || ngModel.$viewValue  === undefined) { return false; }

        angular.forEach(scope.fontlist, function(font) {
          if (ngModel.$viewValue.url === font.url) { presetFont = true; }
        });

        if (presetFont) {
          scope.activePane = 'preset';
          scope.chooseFont(ngModel.$viewValue);
        }
        else {
          scope.activePane = 'custom';
          scope.loadCustomFont(ngModel.$viewValue);
          scope.custom.input = ngModel.$viewValue.url;
        }
      };

      // Choosing a font via select box.
      scope.chooseFont = function(fontObj) {
        ngModel.$setViewValue({name: fontObj.name, url: fontObj.url});
        modelValues.preset = fontObj;
        modelValues.current = modelValues.preset;
        scope.dropdown = false;
      };

      // Can be used in 2 ways, one is sending in a font object, for example
      // when loaded from model. The other way is without an argument, that
      // is when it's called from the template, this should read the value from the input.
      // also clear errors.
      scope.loadCustomFont = function(fontObj) {
        if (fontObj === undefined) { fontObj = parseCustomFont(scope.custom.input); }
        if (!(fontObj && fontObj.url)) { return false; }
        modelValues.current = modelValues.custom;
        scope.custom.loading = true;
        loadFonts([fontObj], 'custom').then(function() {
          ngModel.$setViewValue({name: fontObj.name, url: fontObj.url});
          modelValues.custom = fontObj;
          scope.custom.loading = false;
          modelValues.current = modelValues.custom;
        }).catch(function() {
          ngModel.$setViewValue();
          scope.modelValues.custom = {};
          scope.custom.loading = false;
        });
      };

      // For the button group.
      scope.switchPane = function(pane) {
        ngModel.$setViewValue();
        scope.activePane = pane;
        modelValues.current = modelValues[pane];
        if (pane === 'preset') {
          if (modelValues.preset !== undefined) { scope.chooseFont(modelValues.preset); }
        }
        else if (pane === 'custom') {
          if (modelValues.custom !== undefined) { scope.loadCustomFont(modelValues.custom); }
        }
      };

      scope.togglePreview = function() {
        scope.previewExpanded  = !scope.previewExpanded;
      };

      // Takes an import/link/url from google fonts and parses the name and url.
      function parseCustomFont(font) {
        if (/^(?:<link|@import|http)/.test(font)) {
          var fontObj = {};
          var match = /^(?:<link href='|@import url\()*([^')]+)+/.exec(font);
          fontObj.url = match[1];
          var nameRaw = /.*ily=([^:]+)+/.exec(fontObj.url);
          if (nameRaw === null) { scope.failedFont = font; return false; }
          fontObj.name = nameRaw[1].replace(/\+/g, ' ');
          return fontObj;
        }

        scope.failedFont = font;
        return false;
      }

      // Load font via web font loader
      function loadFonts(fonts, type) {
        var names = [];
        angular.forEach(fonts, function(font) {
          var nameRaw = font.url.match(/.*ily=(.+)$/);
          var name = nameRaw[1].replace(/\+/g, ' ');
          names.push(name);
        });

        return $q(function(resolve, reject) {
          scope.failedFont = '';
          WebFont.load({
            google: {
              families: names,
            },
            active: resolve,
            inactive: reject,
            fontinactive: function(familyName) {
              // I would prefer to handle this with a rejection but inactive is strangly called
              // before this method. Preset should always be correct, hence harsh error.
              if (type === 'preset') {
                throw 'Failed to load font: ' + familyName;
                //return false;
              }
              // And for custom font loading, that's on the user, so actually show the user.
              scope.failedFont = familyName;
              scope.$apply();
            },
            timeout: 3000
          });
        });
      }
    }
  };
}]);

/*
  This is a fix for using dynamic values for svg attributes without errors.
  From this comment on github: https://github.com/angular/angular.js/issues/1050#issuecomment-9650293
*/
angular.forEach(['x', 'y', 'width', 'height'], function(name) {
  var ngName = 'ng' + name[0].toUpperCase() + name.slice(1);
  angular.module('schemaFormFontpicker').directive(ngName, function() {
    return function(scope, element, attrs) {
      attrs.$observe(ngName, function(value) {
        attrs.$set(name, value);
      });
    };
  });
});
