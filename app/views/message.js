define ([
  "backbone",  
  "text!app/templates/_message.html",
  "app/models/score"
], function(Backbone, tpl, Score) {
   var MessageView = Backbone.View.extend({
      el: "#panel",
      template: _.template(tpl), // cache the template.
      
      events: {
        "click #message button": "next"    
      },
      
      render: function() {
        this.data.className = this.data.title.toLowerCase();
        this.$el.html(this.template(this.data));
        $(document).on('keypress', this, this.next); // pass in this as data so that we have context in the handler.
        return this;
      },
      
      // turn off keypress event and trigger custom next event.
      next: function(e) {
        var self = (e.data == undefined)? this : e.data; // depending on how the trigger is happening, context is different!
        $(document).off('keypress');
        self.trigger("next");
      },
      
  });
  
  return MessageView;
});