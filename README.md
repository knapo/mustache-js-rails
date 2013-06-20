# mustache-js-rails

mustache-js-rails integrates [mustache.js](https://github.com/janl/mustache.js) 
and [mustache jQuery extension](https://github.com/jonnyreeves/jquery-Mustache) with rails 3.1+ asset pipeline.

Current binded versions are:

  * jQuery mustache - v0.2.7
  * mustache.js - 0.7.2
 
### Installation

Add

``` ruby
gem 'mustache-js-rails'` 
```

to your `Gemfile`

and

```javascript
//= require mustache
```

to your `app/assets/javascripts/application.js` or other js manifest file.

For jQuery integration also add:

```javascript
//= require jquery.mustache
```
