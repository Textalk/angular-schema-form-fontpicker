Fontpicker addon
=================

[![Bower version](https://badge.fury.io/bo/angular-schema-form-fontpicker.svg)](http://badge.fury.io/bo/angular-schema-form-fontpicker)

Fontpickers for everyone! This fontpicker addon is written from scratch for Angular Schema Form. The only dependency specifically used is the [webfontloader](https://github.com/typekit/webfontloader) for loading the fonts for preview. Currently only Google fonts are supported.

Just about every aspect of this addon is customizable so there are many ways to make it your own. It features a full translation support via the settings as well.

Please note, for simplicty, the options are not watched, so set them, and if changes need to be made, rerender the form.

There are a couple of SVGs inline in the code, these were made by our designer specifically for this project. This is due to us using font-awesome and bootstrap using glyphicons, it's easier this way, less deps.

Installation
------------
The font picker is an add-on to the Bootstrap decorator. To use it, just include
`dist/bootstrap-fontpicker.min.js` *after* `dist/bootstrap-decorator.min.js`.

Easiest way is to install is with bower, this will also include dependencies:
```bash
$ bower install angular-schema-form-fontpicker
```

You'll need to load a few additional files to use fontpicker:

**Be sure to load this projects files after you load angular schema form**

1. jQuery
2. Angular files
3. Webfontloader JS files
4. **Angular Schema Form**
5. The Angular Schema Form Fontpicker JS file (this project)
6. The Angular Schema Form Fontpicker CSS file.


Example

```HTML
<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="/bower_components/angular/angular.min.js"></script>
<script type="text/javascript" src="/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
<script type="text/javascript" src="/bower_components/webfontloader/webfontloader.js"></script>
<script type="text/javascript" src="/bower_components/angular-schema-form/schema-form.min.js"></script>
<script type="text/javascript" src="/bower_components/angular-schema-form/bootstrap-decorator.min.js"></script>

<script type="text/javascript" src="/bower_components/angular-schema-form-fontpicker/bootstrap-fontpicker.min.js"></script>
<link rel="stylesheet" href="/bower_components/angular-schema-form-fontpicker/fontpicker.css">
```

Usage
-----
The fontpicker add-on adds a new form type, `fontpicker`, and a new default
mapping.

|  Form Type     |   Becomes    |
|:---------------|:------------:|
|  fontpicker    |  a fontpicker widget |


| Schema             |   Default Form type  |
|:-------------------|:------------:|
| "type": "string" and "format": "font"   |   fontpicker   |

Form Type Options
-------
The `fontpicker` form type a wide veriety of options, the main 4 groups of settings are: `fontlist`, `preview`, `paneButtons` and `strings`. These themselves can contain several suboptions.

**All options are optional, even if you include a group of options, not all sub-options have to be set. So only override what you need.** 

### `fontlist`
This option is a simple array of objects that have a name and url. This is presented as a list of fonts to choose from. These are fonts from Google Fonts. Example
`{"name": "Open Sans", "url": "http://fonts.googleapis.com/css?family=Open+Sans:300italic,400"}`

### `preview`
These are options surrounding the preview of a chosen or loaded font. Below are all the settings. They can be used in interesting ways, such as setting text and defaultSize and hiding text and size input.

|  Setting    | Type |   Purpose    | Default |
|:---------------|----|:------------:|-----|
|  showTextAndSizeInput    | boolean | If the row with text input and sizes will be shown.  | `true |
|  sizes    | array(ints) | Availible sizes for preview buttons. Can be more or less than 4.  | `[12, 18, 24, 48]` |
|  defaultSize    | int | The one that will be chosen by default | 18 |
|  text    | string | The text that is previewed, if text input is shown, this is the placeholder value. | 'The quick brown fox'... |
|  styles    | array(objects) | One element per preview row. Used for ng-style. Can have several styles per row. | `[{}, {'font-weight': 'bold'}, {'font-style': 'italic'}] |

### `paneButtons`
These are the 2 main buttons for switching between presets and loading any font. These can be independently disabled if you only want one view.

There are 2 sub group of settings. `preset` and `custom`. These have same two settings, `show` and `text`. For example you want to show both but with different texts. You could also hide one, but then the button group isn't shown.

```
{
  "paneButtons": {
    "preset": {
      "text": "Pre-approved fonts"
    },
    "custom": {"text": "Any Google Font"}
  }
}
```

### `strings`
These are the rest of the strings that can be supplied for translations or just alternative english words.


|  Name     |   Location/Meaning    |   Default    |
|:---------------|:------------:|:------------:|
|  loadButton    | Label for load button | Load |
|  dropdown    | The string in the dropdown of fonts, before one is selected. | Choose font |
|  loadError    | When a custom font can't be loaded. Format is name of font then the string. | could not be loaded. |
| customFontDesc | Intructions for loading a font. Default contains a long description of how the get the google fonts url. | You can load any font from <a href="https://www.google.com/fonts">Google Fonts</a>...

### Examples

Below is an example where every option is overriden, but as mentioned below, they all have defaults.

```javascript
{
  "fontlist": [
    {"name": "Old Standard TT", "url": "http://fonts.googleapis.com/css?family=Old+Standard+TT:400,400italic,700"},
    {"name": "Josefin SLab", "url": "http://fonts.googleapis.com/css?family=Josefin+Slab:300,400,700"}
  ],
  "preview": {
    "showTextAndSizeInput": true,
    "sizes": [4, 8, 15, 16, 23, 42],
    "defaultSize": 15,
    "text": "A small yellow badger",
    "styles": [
      {},
      {"font-weight": "bold", "text-decoration": "underline"},
      {"text-decoration": "line-through"}
    ]
  },
  "paneButtons": {
    "preset": {
      "show": true,
      "text": "Pre-approved fonts"
    },
    "custom": {
      "show": true,
      "text": "Any Google Font"
    }
  },
  "strings": {
    "loadButton": "Load it!",
    "dropdown": "Font",
    "loadError": "could really not be gotten.",
    "customFontDesc": "Just google it."
  }
}
```
