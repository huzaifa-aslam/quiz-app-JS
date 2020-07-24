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

    }

]


let userScore=document.getElementById('myScore');

let quesData = document.getElementById("question");

let quesOption=document.getElementById("option");
let startQuiz=document.getElementById("start");
let nextQues=document.getElementById("next");
nextQues.style.visibility = "hidden"
let ques=0
let score=0
let userInput=''

function getValue(event){
    userInput=event.target.value
    if(userInput==myQuestions[ques].correctAnser){
        score++
       

    }
    ques++
    console.log(userInput)
    console.log(score)
}

function start(){
    nextQues.style.visibility = ""
    startQuiz.style.visibility = "hidden"
    next()

}


function next(){
  
    if(ques==myQuestions.length){
        myScore.innerHTML=`Your Score is ${score} out of ${myQuestions.length}`
    return false
    }

    quesData.innerHTML=""
    quesOption.innerHTML=""



// creat question

let h3=document.createElement("h3")
    let quesText=document.createTextNode(myQuestions[ques].question)
    h3.appendChild(quesText)
    quesData.appendChild(h3)


    let check=myQuestions[ques].answer
    for (const property in check) {
 
// creat radio button 
let radioInput=document.createElement("input")
radioInput.setAttribute("type","radio")
radioInput.setAttribute("name","option")
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
label.appendChild(br)
       
      }
     // console.log(myQuestions[ques].correctAnser)
  
    
    

    

   
      
}







