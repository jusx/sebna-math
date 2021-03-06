define ([
  "backbone",  
  "text!app/templates/_main.html",
  "app/models/score",
  "app/collections/equation",
  "app/models/equation",
  "app/views/score",
  "app/views/message",
  "app/views/equation",
  "app/views/finish"
], function(Backbone, tplMain, Score, EquationList, Equation, ScoreView, MessageView, EquationView, FinishView) {
   var AppView = Backbone.View.extend({
      el: "#app",
      template: _.template(tplMain), // cache the template.
      
      events: {
        "click .nav a" : "changeOperator"
      },
      
      initialize: function() {
        this.render();
        this.equations = new EquationList();
        this.scoreView = new ScoreView({model:this.equations.score});
        this.messageView = new MessageView();
        this.equationView = new EquationView();
        this.finishView = new FinishView();
        this.renderEquation();
        
        this.scoreView.listenTo(this.equations, "add", this.scoreView.render);
        this.listenTo(this.messageView, "next", this.renderEquation);
        this.listenTo(this.finishView, "next", this.startOver);
        
        var score = this.equations.score;
        this.listenTo(this.equations, "add", function() {
          if (this.equations.score.isEnded()) {
            this.finishView.model = this.equations.score.toJSON();
            this.finishView.render();
          } else {
            this.messageView.data.title = score.get("lastScore").charAt(0).toUpperCase() + score.get("lastScore").slice(1);
            this.messageView.render();
          }
        });
        
        this.listenTo(this.equationView, "answer", function(equation, answer) {
          this.messageView.data = {answer:answer, equation:equation.toString(), expected:equation.answer()};
          if (equation.isCorrect(answer)) {
            this.equations.correct(equation);
          } else {
            this.equations.incorrect(equation);
          }
        });
        
      },
      
      startOver: function() {
        this.equations.reset();
        this.renderEquation();
        this.scoreView.render();
      },
      
      renderEquation: function() {
        this.equationView.equation = this.equations.createEquation();
        this.equationView.render();
      },
      
      render: function() {
        this.$el.html(this.template());
        return this;
      },
      
      changeOperator: function(e) {
        e.preventDefault();
        switch($(e.target)) {
          case "#add":
            
            break;
          case "#subtract":
          
            break;
          case "#multiply":
            
            break;
        }
      }
      
   });
   
   
   return AppView;
});