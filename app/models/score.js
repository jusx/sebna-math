define ([
  "backbone"
], function(Backbone) {
  var Score = Backbone.Model.extend({
    defaults: {
      remaining: 30,
      correct: 0,
      incorrect: 0,
      lastScore: null
    },
    
    up: function(prop) {
      this.set(prop, this.get(prop) + 1);
      this.set("lastScore", prop);
    },
    
    down: function(prop) {
      if (this.get(prop) != 0) {
        this.set(prop, this.get(prop) - 1);
      }
      
    },
    
    isEnded: function() {
      return (this.get("remaining") == 0);
    },
    
    reset: function() {
      this.clear().set(this.defaults);
    }
    
    
     
   });
   
   
   return Score;
});