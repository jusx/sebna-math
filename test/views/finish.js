(function() {

  define(['app/views/finish'], function(Finish) {
    describe("Finish", function() {
      describe("#up and #down", function() {
        it("should congratulate positively when score is higher than 80!", function() {
          var finish = new Finish({model:{remaining:0, incorrect:5, correct:25}});
          finish.render();
          finish.data.total.should.equal(100);
          finish.data.score.should.equal(Math.round((25/30)*100));
          finish.data.header.should.equal("Excellent!");
          finish.data.description.should.equal("Good job!");
        });
        
        it("should say nice try when score is less than 80", function() {
          var finish = new Finish({model:{remaining:0, incorrect:25, correct:5}});
          finish.render();
          
          finish.data.total.should.equal(100);
          finish.data.score.should.equal(Math.round((5/30)*100));
          finish.data.header.should.equal("Nice Try!");
          finish.data.description.should.equal("Keep trying. You can only get better!");
        });  
        
        it("should trigger next", function() {
          var spy = sinon.spy(Finish.prototype, "next");
          var finish = new Finish({model:{remaining:0, incorrect:25, correct:5}});
          finish.$el.find("#finish button").click();
          spy.calledOnce.should.be.true;
        });
        
      });
      
    });

  });

}).call(this);