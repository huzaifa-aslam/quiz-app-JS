var myQuestions = [
    {
        question: "How many legs do butterflies have?",
        answer: {
            a: 3,
            b:6,
            c: 0,
            d:1

        },

        correctAnser: 6

    },
    {
        question: "2+2=",
        answer: {
            a: 3,
            b:6,
            c: 4,
            d:2

        },

        correctAnser: 4

    },
    {
        question: "1+1=",
        answer: {
            a: 3,
            b:6,
            c: 0,
            d:2

        },

        correctAnser: 2

    },
    {
        question: "1+1=",
        answer: {
            a: 3,
            b:6,
            c: 0,
            d:"two"

        },

        correctAnser: "two"

    }

]


var i = 0;
//var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

let userInfo=document.getElementById('form')

let userScore=document.getElementById('myScore');

let quesData = document.getElementById("question");

let userName=document.getElementById('username')

let quesOption=document.getElementById("option")

let nextSpan=document.getElementById("spanNext")

let nextButton=document.getElementById("nextBtn")

let startQuiz=document.getElementById("start");
let nextQues=document.getElementById("next");
nextQues.disabled=true
nextButton.style.visibility = "hidden"
nextQues.style.visibility = "hidden"
userScore.style.visibility = "hidden"

let ques=0
let abc=ques
let score=0
let userInput=[]
let quesInc=1
let copied=[];
let finalCopied=[]
let corrAnswer=[]

let state={

}



const  typeWriter=(txt)=> {

    if (i < txt.length) {
      document.getElementById("myScore").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

 

  function getValue(event){
       
   
        
   
    userInput.push(event.target.value)
    copied=userInput.slice(-1)
   
     
    
    
}

function submitAnswer(){
    nextQues.disabled=false
    finalCopied.push(copied)
   
       
    
    console.log("finalCopied",finalCopied)
}

function start(){
   nextButton.style.visibility=""
    nextQues.style.visibility = ""
    startQuiz.style.visibility = "hidden"
    userInfo.style.visibility = "hidden"
   next()

}



function next(){
 
    nextQues.disabled=true
       
        
    if(ques==myQuestions.length){
        userScore.style.visibility = ""
        nextQues.disabled=true
        for(var k=0;k<=myQuestions.length-1;k++){
            if(corrAnswer[k]==finalCopied[k]){
                score++
            }
        }
        nextSpan.innerHTML="Finished"
        userScore.classList.add("alert-success")

        myScore.innerHTML=`${userName.value} Your Score is ${score} out of ${myQuestions.length}`
    return false
    }
  
    quesData.innerHTML=""
    quesOption.innerHTML=""

  

// creat question

let h3=document.createElement("h3")
    let quesText=document.createTextNode("Q"+quesInc +".) "+" "+myQuestions[ques].question)
    h3.appendChild(quesText)
    quesData.appendChild(h3)
   
    corrAnswer.push(myQuestions[ques].correctAnser)

    let check=myQuestions[ques].answer
  

    for (const property in check) {
 
// creat radio button 
let radioInput=document.createElement("input")
radioInput.setAttribute("type","radio")
radioInput.setAttribute("name","option")
radioInput.setAttribute("class","choose")
radioInput.setAttribute("required","required")
radioInput.setAttribute("onclick","getValue(event)")
radioInput.setAttribute("value",`${check[property]}`)
quesOption.appendChild(radioInput)



// creat label
let label=document.createElement("label")
let labelText=document.createTextNode(`${check[property]}`)
label.appendChild(labelText)
quesOption.appendChild(label)

let br=document.createElement("br")
quesOption.appendChild(br)
       
      }
    //   console.log("ques",myQuestions[ques])
    //  console.log("ans",corrAnswer)
      
   
     quesInc++
   ques++
    
     
    
      
}

//console.log("ans2",userInput)




