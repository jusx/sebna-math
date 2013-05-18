(function() {

  define(['app/models/score'], function(Score) {
    describe("Score", function() {
      
      describe("#up and #down", function() {
        it("should increment by 1", function() {
          var score = new Score();
          
          _.each(["correct",  "incorrect"], function(prop) {
            score.up(prop);
            score.get(prop).should.equal(1);
            score.up(prop);
            score.get(prop).should.equal(2);
          });
        });
        
        it("should decrement by 1 and only when not already zero", function() {
          var score = new Score();
          score.down("remaining");
          score.get("remaining").should.equal(29);
          
          score.down("correct");
          score.get("correct").should.equal(0);
        });
        
        
      });
      
    });

  });

}).call(this);