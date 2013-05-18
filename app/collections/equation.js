define ([
  "backbone",
  "app/models/equation",
  "app/models/score"
], function(Backbone, Equation, Score) {
   var EquationList = Backbone.Collection.extend({
     model: Equation,
     score: new Score(),
     operator: "+",
     
     // create an equation not already in the collection
     createEquation: function() {
       // find till you can't
       var x = this.random(10, 0);
       var y = this.random(10, 0);
       while (this.where({x: x, y:y}).length!=0) {
         x = this.random(10, 0);
         y = this.random(10, 0);
       }
       return new Equation({x: this.random(10, 0), y: this.random(10,0), operator: this.operator});
     },
     
     // helper method.
     random: function(max, min) {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
     },
     
     correct: function(eq) {
       this.score.up("correct");
       this.score.down("remaining");
       this.add(eq);
     },
     
     incorrect: function(eq) {
       this.score.up("incorrect");
       this.score.down("remaining");
       this.add(eq);
     }
     
     
     
   });
   
   
   return EquationList;
});