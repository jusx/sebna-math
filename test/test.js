require.config({
  baseUrl: '../',
  paths: {
    jquery: "http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min",
    underscore: "http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min",
    backbone: "http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min",
    text: "http://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text",
    mocha: "test/lib/mocha/mocha",
    chai: "test/lib/chai/chai",
    sinon: "test/lib/sinon/sinon"
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


require(["require", "chai", "mocha", "sinon"], function(require, chai) {

    assert = chai.assert;
    expect = chai.expect;
    should = chai.should();

    mocha.setup({
      ui: "bdd",
    });
    var specs = [
      "test/collections/equation",
      "test/models/score"
    ];
    require(specs, function() {
       mocha.run()
    })
});
