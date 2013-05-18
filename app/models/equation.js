define ([
  "backbone"
], function(Backbone) {
   var Equation = Backbone.Model.extend({
     // x operator y
     
     isCorrect: function(input) {
       return (input==this.answer());
     },
     
     answer: function() {
       return eval(this.toString());
     },
     
     toString: function() {
       return this.get("x") + " " + this.get("operator") + " " + this.get("y");
     }
     
   });
   
   
   return Equation;
});