require.config({
  baseUrl: '../',
  paths: {
    jquery: "app/lib/jquery/jquery.min",
    underscore: "app/lib/underscore/underscore-min",
    backbone: "app/lib/backbone/backbone",
    text: "app/lib/text/text",
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
      "test/models/score",
      "test/views/finish"
    ];
    require(specs, function() {
       mocha.run()
    })
});
