var questions = [
    {
        "question": 'Rs.1200 divided among P, Q and R. P gets half of the total amount received by Q and R. Q gets one-third of the total amount received by P and R. Find the amount received by R ?',
        "options" : {
            "o1": "Rs. 500 ",
            "o2": "Rs. 1200 ",
            "o3": "Rs. 700 ",
        }
    },
    {
        "question": 'A train, 300m long, passed a man, walking along the line in the same direction at the rate of 3 km/hr in 33 seconds. The speed of the train is ?',
        "options" : {
            "o1": "30 km/h ",
            "o2": "32 and 8/11 km/h ",
            "o3": "35 and 8/11 km/h ",
        }
    },
    {
        "question": 'Arun buys one kilogram of apples for Rs. 120 and sells it to Swati gaining 25%. Swati sells it to Divya who again sells it for Rs. 198, making a profit of 10%. What is the profit percentage made by Swati ?',
        "options" : {
            "o1": "25% ",
            "o2": "20%",
            "o3": "16.67%",
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
    correct3 = false;
})

document.getElementById('q3o2').addEventListener('click', function(){
    document.getElementById('q3o2').style = "background-color: lightblue;";
    document.getElementById('q3o1').style = "background-color: slate;";
    document.getElementById('q3o3').style = "background-color: slate;";
    correct3 = true;
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
        window.location.replace('level2_3.html');
    } else if((correct1 && correct2) || (correct2 && correct3) || (correct3 && correct1)){
        count = 2;
        window.location.replace('level2_w2.html');
    } else if(correct1 || correct2 || correct3){
        count = 1;
        window.location.replace('level2_w3.html');
    } else{
        count = 0;
        let popup = document.getElementById('popup');
        popup.classList.add("open-popup");
    }
})