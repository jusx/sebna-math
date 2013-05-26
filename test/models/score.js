(function() {

  define(['app/models/score'], function(Score) {
    describe("Score", function() {
      var score;
      
      beforeEach(function() {
        score = new Score();
      }),
      
      describe("#up and #down", function() {
        it("should increment by 1", function() {
          
          _.each(["correct",  "incorrect"], function(prop) {
            score.up(prop);
            score.get(prop).should.equal(1);
            score.up(prop);
            score.get(prop).should.equal(2);
          });
        });
        
        it("should decrement by 1 and only when not already zero", function() {
          score.down("remaining");
          score.get("remaining").should.equal(29);
          
          score.down("correct");
          score.get("correct").should.equal(0);
        });
        
        it("should know when it's ended", function() {
          (score.get("remaining")>0).should.be.true;
          score.isEnded().should.be.false;
          
          score.set("remaining", 0);
          score.isEnded().should.be.true;
          
        });
        
      });
      
    });

  });

}).call(this);