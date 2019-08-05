
//starter code
//this data model will have multiple answers to each question: 
//this means ill have an array of questions with wich questions containing an array of answers with values of true or false true meaning it is corect.
var counter=0;//this will keep track of question the user is on 
var score=0; //this will be incremented when the user ansers a question correct
const q1={
    question: "What is the most important meal of the day and why?",
    answers: {
       a: "Lunch is , beacause it is the part of the day you are most active.",
        b:"Dinner becuase you are choosing the last thing that goes in your body",
       c:"Snacks thoughout the day are best. Meals are a lie.",
        d:"Breakfast becase it determines your hormonal response for the rest of the day."
    },
    corrects:{
        a:false,
        b:false,
        c:false,
        d:true
    }
};
const q2={
    question: "What are the main macronutrients in food?",
    answers: {
        a:"protiens,fats and sugars.",
        b:"protiens,fats,and carbohydrates", 
        c:"carbohydrates,sugars, and fats",
        d:"protiens,carbohydrates, and oxygen" 
        
    },
    corrects:{
        a:false,
        b:true,
        c:false,
        d:false
    }
};
const q3={
    question: "A nutrient that makes half your body is __",
    answers: {
       a:"fats",
       b:"protiens",
       c:"vitamins",
       d:"water"
    },
    corrects:{
        a:false,
        b:false,
        c:false,
        d:true
    }
};
const q4={
    question: "Nutrients that provide and promote healthy skin and normal growth.",
    answers:
    {
        a:"fats",
        b:"protiens",
        c:"vitamins",
        d:"water"
    },
    corrects:{
        a:true,
        b:false,
        c:false,
        d:false
    }
};
const
 q5={
    question: "Baked or boiled foods have less _________ than fried foods.",
    answers: {
        a:"bacteria",
        b:"choloesteral",
        c:"fat",
        d:"sodium"
        
    },
    corrects:{
        a:false,
        b:false,
        c:true,
        d:false
    }
};
const q6={
    question: "The amount of ______________ a person eats can be deceased by not putting salt in food",
    answers: {
       a: "sugar",
        b:"salt",
       c:"hormones",
        d:"anxiety"
    },
    corrects:{
        a:false,
        b:false,
        c:false,
        d:true
    }
};
const q7={
    question: "THE PSYCHOLOGICAL DESIRE FOR FOOD IS",
    answers: {
       a: "apetite",
        b:"calorie",
       c:"hungry",
        d:"nutrient deficiency"
    },
    corrects:{
        a:true,
        b:false,
        c:false,
        d:false
    }
};
const q8={
    question: "a shortage of a nutrient is called",
    answers: {
        a: "apetite",
        b:"calorie",
       c:"hungry",
        d:"nutrient deficiency"
    },
    corrects:{
        a:false,
        b:false,
        c:false,
        d:true
    }
};
const q9={
    question: "a unit of available energy in different foods is",
    answers: {
        a: "obesity",
        b:"calorie",
       c:"weight control",
        d:"desired weight"
      
    },
    corrects:{
        a:false,
        b:true,
        c:false,
        d:false
    }
};
const q10={
    question: "the nutrient that helps builds muscle and cells is",
    answers: {
       a: "water",
        b:"protien",
       c:"fiber",
        d:"cholesterol"
    },
    corrects:{
        a:false,
        b:true,
        c:false,
        d:false
    }
};

const questions=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10]
/*$(".submit").on("click",function(){
    let len= questions.length;
    let stirngoutput="";
        for(let i=0; i<len ;i++){
            console.log(questions[i].question);
            
    }});*/
    //this was to show how to access the array of information above 




function handleStart(){
 $(".submit").on("click",function(event){
     event.preventDefault();///makes the page not revert vto its original //deletes original title
     creatNextQuestion(counter);
     $(".score").remove();//removes initail score at first load of question
})
}
function startOver(){
   
        location.reload();
        handleStart();
 
}

function creatNextQuestion(counter){
     let questionforpage=questions[counter].question;
     let answer1=questions[counter].answers.a;
     let answer2=questions[counter].answers.b;
     let answer3=questions[counter].answers.c;
     let answer4=questions[counter].answers.d;
     $(".title").remove();//deletes past title
     $(".content").append('<h1 class="title">'+questionforpage+'</h1>'+
     '<ul class="answersinputs"><input type="radio" name="a" id="a"><label for="a1">'+answer1+'</label><br/>'
     +'<input type="radio" name="a" id="b"><label for="a2">'+answer2+'</label><br/>'
     +'<input type="radio" name="a" id="c" ><label for="a3">'+answer3+'</label><br/>'
     +'<input type="radio" name="a" id="d"><label for="a4">'+answer4+'</label><br/>'
     +'</ul>'
     +'<div class="score"> Quiz score:'+score+'/'+counter+'<div>')
     if(counter>questions.length-1){
         console.log("its here");
     }
//delete the button and add a new one 
$(".submit").remove();
$(".answersinputs").append('<button class="submit" id="submit-answer">SUBMIT</button>');
$(".submit").on("click",function(event){
    let checkanswer= checkAnswer();//now pass the check answer to feedback function to continue 
    feedback(checkanswer);
 });
}


function checkAnswer(){
       let check = $("input[name='a']:checked").attr('id');//selects the radio button that is selected and gets its id and 
       return questions[counter].corrects[check];
       //do something for a fail 
}
function feedback(value){
    $(".score").remove();//removes score drom from last page
    let theychose= $("input[name='a']:checked").attr('id');//this check gets the answer selected 
    let answervalues=Object.values(questions[counter].corrects); //an array of true or falses
    let correctanswer='a';//starts at a
    for(i=0; i<answervalues.length;i++)
    {
     if(answervalues[i]==true){//starts at the first letter a
       break;
     }  
     correctanswer=nextChar(correctanswer);
    };
        if(value===true){
            score++;
            
            $(".submit").remove();
            $(".answersinputs").remove();
            $(".title").remove();
            $(".content").append('<h1 class="title">You answered correctly!</h1>'+
            '<button class="submit" id="submit-answer">Continue</button>'
            +'<div class="score"> Quiz score:'+score+'/'+(counter+1)+'<div>'
            );
            counter++;
                if(counter>questions.length-1){
                $(".submit").html('start over?');
                $(".submit").on("click",function(){
                startOver();
                });
                }
            else{
                //after i cleck a submit button th score should be delted adn then appended at the bottomof content
                $(".submit").on("click",function(event){
                    $(".score").remove();
                    creatNextQuestion(counter);
                });
                }
            }
        else{
            
            $(".submit").remove();
            $(".answersinputs").remove();
            $(".title").remove();
            $(".content").append('<h1 class="title">You answered incorrectly!</h1>'+
            '<p class="paragraph-feedback">The correct answer was:'+'<br></br>'+questions[counter].answers[correctanswer]+'</p>'
            +'<button class="submit" id="submit-answer">Continue</button>'
            +'<div class="score"> Quiz score:'+score+'/'+(counter+1)+'<div>'
            );
            
            counter++;
            if(counter>questions.length-1){//when the questions are out start over ;
                $(".submit").html('start over?');
                $(".content").append('<div class="score"> Quiz score:'+score+'/'+(counter+1)+'<div>');
                console.log("i got here");
                $(".submit").on("click",function(event){
                startOver();
                });
            }
            $(".submit").on("click",function(event){
                $(".paragraph-feedback").remove();
                $(".score").remove();
                creatNextQuestion(counter);
            });
            }
}
    //on submit of the continue button the createNextQuestion is called
   //counter++;
   //creatNextQuestion(counter);
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

handleStart();//this triggers when the user is ready to start the quiz
//now that we are on the first question create an ecent listner to get the submission from the user 