require.config({
  paths: {
    jquery: "http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min",
    underscore: "http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min",
    backbone: "http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min",
    text: "http://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text"
  },
  
  shim: {
    underscore: {
      exports: "_"
    },
    
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    }
  }
});

require([
   "views/app"
], function(AppView) {
   var app = new AppView();
  
});