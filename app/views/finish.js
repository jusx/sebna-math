define ([
  "backbone",  
  "text!app/templates/_finish.html"
], function(Backbone, tpl) {
   var FinishView = Backbone.View.extend({
      el: "#panel",
      template: _.template(tpl), // cache the template.
      
      events: {
        "click #finish button": "next"    
      },

      render: function() {
        var correct = this.model.correct;
        var questions = this.model.incorrect + this.model.correct;
        var points = Math.round((correct/questions) * 100);
        
        this.data = {score:points, total:100};
        if (points >= 80) { 
          this.data.header = "Excellent!"; this.data.description = "Good job!";
        } else {
          this.data.header = "Nice Try!"; this.data.description = "Keep trying. You can only get better!";
        }
        
        this.$el.html(this.template(this.data));
        return this;
      },
      
      // turn off keypress event and trigger custom next event.
      next: function(e) {
        var self = (e.data == undefined)? this : e.data; // depending on how the trigger is happening, context is different!
        self.trigger("next");
      },
      
  });
  
  return FinishView;
});