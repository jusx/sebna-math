define ([
  "backbone",  
  "text!app/templates/_score.html",
  "app/models/score"
], function(Backbone, tpl, Score) {
   var ScoreView = Backbone.View.extend({
      el: "#score-list",
      template: _.template(tpl), // cache the template.

      initialize: function() {
        this.render();
      },
      
      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        var last = this.model.get("lastScore");
        if (last) {
         this.shake(last);
        }
        return this;
      },

      // helper method to animate scoring based on the last scoring result correct/incorrect.
      shake: function(last) {
        var elm = this.$el.find(".js-" + last)
        var top = elm.offset().top;
        var left = elm.offset().left;
        var inter = setInterval( function() {
          shake = 8;
          elm.stop(true,false).css({ 
            position: 'relative', 
            left: Math.round(Math.random() * shake)  +'px', 
            top: Math.round(Math.random() * shake)  +'px'
          })}, 10);
            
        setTimeout(function(){
          clearInterval(inter);
          elm.stop(true, false).css({left: left + "px",  top: top + "px", position: "static"});
        }, 
        500);
      }
      
      
  });
  
  return ScoreView;
});  