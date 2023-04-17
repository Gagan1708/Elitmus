var questions = [
    {
        "question": 'What country has the highest life expectancy?',
        "options" : {
            "o1": "Hong Kong",
            "o2": "India",
            "o3": "Singapore",
        }
    },
    {
        "question": 'Where would you be if you were standing on the Spanish Steps?',
        "options" : {
            "o1": "Norway",
            "o2": "Paris",
            "o3": "Rome",
        }
    },
    {
        "question": 'How many faces does a Dodecahedron have?',
        "options" : {
            "o1": "12",
            "o2": "10",
            "o3": "32",
        }
    }
]

var correct1 = false;
var correct2 = false;
var correct3 = false;

document.getElementById('q1').innerHTML = questions[0].question;
document.getElementById('q1o1').innerHTML = questions[0].options.o1;
document.getElementById('q1o2').innerHTML = questions[0].options.o2;
document.getElementById('q1o3').innerHTML = questions[0].options.o3;

document.getElementById('q1o1').addEventListener('click', function(){
    document.getElementById('q1o1').style = "background-color: lightblue;";
    document.getElementById('q1o2').style = "background-color: slate;";
    document.getElementById('q1o3').style = "background-color: slate;";
    correct1 = true;
})

document.getElementById('q1o2').addEventListener('click', function(){
    document.getElementById('q1o2').style = "background-color: lightblue;";
    document.getElementById('q1o1').style = "background-color: slate;";
    document.getElementById('q1o3').style = "background-color: slate;";
    count++;
    correct1 = false;
})

document.getElementById('q1o3').addEventListener('click', function(){
    document.getElementById('q1o3').style = "background-color: lightblue;";
    document.getElementById('q1o2').style = "background-color: slate;";
    document.getElementById('q1o1').style = "background-color: slate;";
    correct1 = false;
})

document.getElementById('q2').innerHTML = questions[1].question;
document.getElementById('q2o1').innerHTML = questions[1].options.o1;
document.getElementById('q2o2').innerHTML = questions[1].options.o2;
document.getElementById('q2o3').innerHTML = questions[1].options.o3;

document.getElementById('q2o1').addEventListener('click', function(){
    document.getElementById('q2o1').style = "background-color: lightblue;";
    document.getElementById('q2o2').style = "background-color: slate;";
    document.getElementById('q2o3').style = "background-color: slate;";
    correct2 = false;
})

document.getElementById('q2o2').addEventListener('click', function(){
    document.getElementById('q2o2').style = "background-color: lightblue;";
    document.getElementById('q2o1').style = "background-color: slate;";
    document.getElementById('q2o3').style = "background-color: slate;";
    correct2 = false;
})

document.getElementById('q2o3').addEventListener('click', function(){
    document.getElementById('q2o3').style = "background-color: lightblue;";
    document.getElementById('q2o2').style = "background-color: slate;";
    document.getElementById('q2o1').style = "background-color: slate;";
    correct2 = true;
})


document.getElementById('q3').innerHTML = questions[2].question;
document.getElementById('q3o1').innerHTML = questions[2].options.o1;
document.getElementById('q3o2').innerHTML = questions[2].options.o2;
document.getElementById('q3o3').innerHTML = questions[2].options.o3;

document.getElementById('q3o1').addEventListener('click', function(){
    document.getElementById('q3o1').style = "background-color: lightblue;";
    document.getElementById('q3o2').style = "background-color: slate;";
    document.getElementById('q3o3').style = "background-color: slate;";
    correct3 = true;
})

document.getElementById('q3o2').addEventListener('click', function(){
    document.getElementById('q3o2').style = "background-color: lightblue;";
    document.getElementById('q3o1').style = "background-color: slate;";
    document.getElementById('q3o3').style = "background-color: slate;";
    correct3 = false;
})

document.getElementById('q3o3').addEventListener('click', function(){
    document.getElementById('q3o3').style = "background-color: lightblue;";
    document.getElementById('q3o2').style = "background-color: slate;";
    document.getElementById('q3o1').style = "background-color: slate;";
    correct3 = false;
})

var count = 0;
document.getElementById('submit').addEventListener('click', function(){
    if(correct1 && correct2 && correct3){
        count = 3;
        window.location.replace('level1_2.html');
    } else if((correct1 && correct2) || (correct2 && correct3) || (correct3 && correct1)){
        count = 2;
        window.location.replace('level1_w1.html');
    } else if(correct1 || correct2 || correct3){
        count = 1;
        window.location.replace('level1_w2.html');
    } else{
        count = 0;
        let popup = document.getElementById('popup');
        popup.classList.add("open-popup");
    }
})