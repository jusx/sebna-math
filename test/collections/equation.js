(function() {

  define(['app/collections/equation'], function(EquationList) {
    describe("EquationList", function() {
      
      describe("#initialize", function() {
        it("score should have the right initial values.", function() {
          var eqs = new EquationList();
          eqs.score.get("remaining").should.equal(30);
          eqs.score.get("incorrect").should.equal(0);
          eqs.score.get("correct").should.equal(0);
          
          eqs.correct(eqs.createEquation());
          eqs.score.get("correct").should.equal(1);
        });
        
      });
      
      describe("#reset", function() {
        it("Should reset score", function() {
          var eqs = new EquationList();
          eqs.correct(eqs.createEquation());
          eqs.score.get("correct").should.equal(1);
          
          eqs.reset();
          eqs.score.get("correct").should.equal(0);
          eqs.score.get("remaining").should.equal(30);
        });
      });
      
      describe("#createEquation", function() {
        var eqs = null;
        beforeEach(function(){
          eqs = new EquationList();
        });
        
        it("Should return an equation not already in the list", function() {
          for (var i =0; i<30; i++) {
            var eq = eqs.createEquation()
            eqs.where({x:eq.x, y:eq.y}).length.should.equal(0);
            eqs.add(eq);
          }
        });
        
        it("Should update score appropriately", function() {
          var eq = eqs.createEquation();
          eqs.correct(eq);
          eqs.where(eq.toJSON()).length.should.equal(1);
          eqs.score.get("remaining").should.equal(29);
          eqs.score.get("correct").should.equal(1);
        });
      })
    });

  });

}).call(this);