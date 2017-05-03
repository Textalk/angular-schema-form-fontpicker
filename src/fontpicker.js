/*global WebFont: false */
angular.module('schemaFormFontpicker').directive('fontPicker',  ['$q', '$interpolate', function($q, $interpolate) {
  'use strict';
  return {
    restrict: 'AE',
    scope: true,
    require: 'ngModel',
    templateUrl: 'directives/decorators/bootstrap/fontpicker/fontpickerdirective.html',
    link: function(scope, element, attrs, ngModel) {
      var fonturl = '//fonts.googleapis.com/css?family=';
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
          if (!scope.strings.loadError) { scope.strings.loadError = '{{fontName}} could not be loaded.'; }
          if (!scope.strings.customFontDesc) {
            scope.strings.customFontDesc = 'You can load any font from <a href="https://fonts.google.com/">'+
            'Google Fonts</a>. Press the red (+) icon next to any font. A bar will appear at the bottom of the page.'+
            'Press that bar, and under Embed font, copy the full text in the gray box that starts with <link.'+
            'Now paste that below here and press the load button. The font is loaded and can be previewed.'+
            'On google fonts, below the embed code, under the section "Specify in CSS", it details how to use the font.';
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
              {name: 'Lato',                 url: fonturl + 'Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic'},
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

          // Make the links schema agnostic.
          scope.fontlist = scope.fontlist.map(function(font) {
            return {name: font.name, url: font.url.replace(/^http[s]*:\/\//, '//')};
          });

          // Load initial fonts for preset list.
          loadFonts(scope.fontlist, 'preset');
          ngModel.$render();

          // Set up load error message
          scope.loadError = $interpolate(scope.strings.loadError);

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
          modelValues.preset = ngModel.$viewValue;
          modelValues.current = modelValues.preset;
          scope.dropdown = false;
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
        return false;
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

      scope.addQuotes = function(string) {
        return '"' + string + '"';
      };

      // Takes an import/link/url from google fonts and parses the name and url.
      function parseCustomFont(font) {
        if (/^(?:<link|http)/.test(font)) {
          var fontObj = {};

          if (/^http/.test(font)) {
            var match = /^(?:<link href='|@import url\()*([^')]+)+/.exec(font);
          } else if (/^<link/.test(font)) {
            var match = /^<link href="([^")]+)".+/.exec(font);
          }

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
