define ([
  "backbone",  
  "text!templates/_main.html"
], function(Backbone, tplMain) {
   var AppView = Backbone.View.extend({
      el: "#app",
      template: _.template(tplMain),
      
      initialize: function() {
         console.log("init");
         this.render();
      },
      
      render: function() {
         this.$el.html(this.template());
         return this;
      }
      
   });
   
   
   return AppView;
});