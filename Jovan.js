var result = 0;
gameplaying = true;

while (gameplaying) {
    var Questions = function(question,answers,correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Array.prototype.randromQuestion = function() {
        return this[Math.floor(Math.random() * this.length)]
    }

    var question1 = new Questions('who\'s your daddy',['0. Me', '1. Your dad'], 0);
    var question2 = new Questions('name the best game', ['0.The witcher', '1.MGSV', '2.AC-Odyssey', '3.Cyberpunk', '4.Mortal Kombat 11'], 3)
    var question3 = new Questions('Best food?', ['0.pizza', '1.Bolognese', '2.Carbonara','3.Mousakas'],2)

    var questions=[question1,question2,question3];

    var getrandomQ = questions.randromQuestion();

    Questions.prototype.printAnswers = function() {
        for (let i = 0; i < getrandomQ.answers.length; i++) {
            console.log(getrandomQ.answers[i]);
        }
    }

    Questions.prototype.checkAnswer = function() {
        if (userAnswer == getrandomQ.correct) {
            result +=1;
            console.log('You were correct, your score is ' + result + '!');
        } else if (userAnswer === 'exit') {
            gameplaying = false
        } else {
            console.log('Sorry,Not Sorry, try again')
        }
    }



    //var answer1 = question1.answers[question1.correct]
    //console.log(question1.answers);
    //console.log(answer1);


    getrandomQ.printAnswers();
    var userAnswer = window.prompt(getrandomQ.question)
    getrandomQ.checkAnswer();

}

