define ([
  "backbone",  
  "text!app/templates/_equation.html"
], function(Backbone, tpl) {
   var EquationView = Backbone.View.extend({
      el: "#panel",
      template: _.template(tpl), // cache the template.
      
      events: {
        "submit form" : "submit"
      },
      
      initialize: function() {
      },
      
      render: function() {
        this.$el.html(this.template({equation:this.equation.toString()}));
        this.$el.find("input").val("").focus();
        return this;
      },
      
      submit: function(e) {
        e.preventDefault();
        var value = this.$el.find("input").val();
        this.trigger("answer", this.equation, value);
      }
      
  });
  
  return EquationView;
});