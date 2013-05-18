require.config({
  baseUrl: '.',
  paths: {
    jquery: "http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min",
    jqueryui: "http//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min",
    underscore: "http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min",
    backbone: "http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min",
    text: "http://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text"
  },
  
  shim: {
    underscore: {
      exports: "_",
      init: function () {
        this._.templateSettings = {interpolate : /\{\{(.+?)\}\}/g} // make it work with mustache syntax to avoid ajax get errors/warning about mailformed html/xml.
        return _;
      }
      
    },
    
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    
    jqueryui: {
      deps: ["jquery"],
      exports: "$"
    }
  }
});


require([
   "app/views/app"
], function(AppView) {
  var app = new AppView();
  
});