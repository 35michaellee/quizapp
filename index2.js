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
    corrects:'d',
};
const q2={
    question: "What are the main macronutrients in food?",
    answers: {
        a:"protiens,fats and sugars.",
        b:"protiens,fats,and carbohydrates", 
        c:"carbohydrates,sugars, and fats",
        d:"protiens,carbohydrates, and oxygen" 
        
    },
    corrects:'b',
};
const q3={
    question: "A nutrient that makes half your body is __",
    answers: {
       a:"fats",
       b:"protiens",
       c:"vitamins",
       d:"water"
    },
    corrects:'d',
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
    corrects:'a',
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
    corrects:'c',
    
};
const q6={
    question: "The amount of ______________ a person eats can be deceased by not putting salt in food",
    answers: {
       a: "sugar",
        b:"salt",
       c:"hormones",
        d:"anxiety"
    },
    corrects:'d',
};
const q7={
    question: "The Psycological desire for food is",
    answers: {
       a: "apetite",
        b:"calorie",
       c:"hungry",
        d:"nutrient deficiency"
    },
    corrects:'a',
};
const q8={
    question: "a shortage of a nutrient is called",
    answers: {
        a: "apetite",
        b:"calorie",
       c:"hungry",
        d:"nutrient deficiency"
    },
    corrects:'d',
};
const q9={
    question: "a unit of available energy in different foods is",
    answers: {
        a: "obesity",
        b:"calorie",
       c:"weight control",
        d:"desired weight"
      
    },
    corrects:'b',
};
const q10={
    question: "the nutrient that helps builds muscle and cells is",
    answers: {
       a: "water",
        b:"protien",
       c:"fiber",
        d:"cholesterol"
    },
    corrects:'d',
};

const questions=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
function handleQuestionSubmit(){
    $(".questionsubmit").on("click",function(event){
    event.preventDefault();///makes the page not revert vto its original //deletes original title
    checkQuestion();
        
   })
 }
function loadQuestions(){
    if(counter==(questions.length-1)){
        $('.feedbackdiv').html('');
        $('.feedbackdiv').addClass('hidden');
         $('.startoverdiv').removeClass('hidden');
        $('.startoverdiv').html(`  
        <h1>Hey you have reached the end of the Quiz and your final score was ${score} out of 10 possible </br>
        Please refresh the page or press countinue to start over.</h1>
        <button class="startOver button">Start Over</button>
        `);
        startOver();
    }
    else{
    $('.radiobutton').prop('checked', false);
    $('.feedbackdiv').addClass('hidden');
    $('.feedbackdiv').html('');;// this needs to work and its not
    $('.questiondiv').removeClass('hidden');
        let startchar='a';
        let inputs = document.getElementById('form').getElementsByTagName('input');
        let questionTitle=questions[counter].question;
     $('.question').html(questionTitle);
        for (var i=0; i<inputs.length; i++) {
            let y=questions[counter].answers[startchar];
            document.getElementById('label'+startchar).innerHTML= y;
            document.getElementById(startchar).value= y;
            startchar=nextChar(startchar);
        }
    }
    
   }

function checkQuestion(){
        let checked= isOneChecked();
            if(checked){   
                    let radioId = $("input[name='answer']:checked").attr("id");
                    let answer=(questions[counter].corrects==radioId);
                    if(answer){   
                        counter++;
                        givefeedback(answer);
                    }
                    else{
                        counter++;
                        givefeedback(answer);   
                    }
            }
            else{
                alert("please answer the question");
            }
  }
  function givefeedback(answer){
    $('.questiondiv').addClass('hidden');
    if(answer){
        score++;
        $('.feedbackdiv').removeClass('hidden');
        $('.feedbackdiv').append(`<h1>Yay! You chose correctly!</h1>
       <p>Your score is currently ${score}/10</p>
       <button class="continue button">continue</button>`);
       $('.continue').on("click",function(event){
        loadQuestions();
       });

    }else{
        $('.feedbackdiv').removeClass('hidden');
        $('.feedbackdiv').append(`<h1>Sorry! You chose incorrectly!</h1>
        <p>Your score is currently ${score}/10</p>
        <button class="continue button">continue</button>`);
        $('.continue').on("click",function(event){
            loadQuestions();
           });
        
    }
  }
   function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }
    
   function isOneChecked() { 
        var chx = document.getElementById('form').getElementsByTagName('input');
        for (var i=0; i<chx.length; i++) {
            // If you have more than one radio group, also check the name attribute
            // for the one you want as in && chx[i].name == 'choose'
            // Return true from the function on first match of a checked item
            if (chx[i].type == 'radio' && chx[i].checked) {
                return true;
            } 
         }
        return false;
  }
  function begin(){
    $(".submit").on("click",function(event){
        event.preventDefault();
        $('.beginning').html('');//clears the html of the div class
        $('.beginning').addClass('hidden');
        $('.questiondiv').removeClass('hidden');
        loadQuestions();
         });
  }
  function startOver(){ 
     $('.startOver').on("click", function(event){ 
         counter=0;
         score=0;
            $('.beginning').html(`<h1>welcome to the quiz</h1>
            <button class="submit button">start quiz</button>
            <p class="score hidden">score</p>`);
            $('.radiobutton').prop('checked', false);///unchecks any radio buttons
        
            $('.beginning').removeClass('hidden');
            $('.feedbackdiv').addClass('hidden');
            $('.startoverdiv').addClass('hidden');
                 begin();
    });

}
begin();
handleQuestionSubmit(); 
