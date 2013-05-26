require.config({
  baseUrl: '.',
  paths: {
    jquery: "app/lib/jquery/jquery.min",
    underscore: "app/lib/underscore/underscore-min",
    backbone: "app/lib/backbone/backbone",
    text: "app/lib/text/text"
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
    }
  }
});


require([
   "app/views/app"
], function(AppView) {
  var app = new AppView();
  
});