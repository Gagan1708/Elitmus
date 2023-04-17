var questions = [
    {
        "question": 'A merchant has 1000 kg of sugar part of which he sells at 8% profit and the rest at 18% profit. He gains 14% on the whole. The Quantity sold at 18% profit is ?',
        "options" : {
            "o1": "400 kg ",
            "o2": "560 kg ",
            "o3": "600 kg",
        }
    },
    {
        "question": 'If the price of rice be raised by 25%, the percent by which a house-holder must reduce his consumption of rice so as not to increase his expenditure on rice is ?',
        "options" : {
            "o1": "225%",
            "o2": "25.75% ",
            "o3": "20%",
        }
    },
    {
        "question": 'A boat sails 15 km of a river towards upstream in 5 hours. How long will it take to cover the same distance downstream, if the speed of current is one-fourth the speed of the boat in still water ?',
        "options" : {
            "o1": "1.8 h ",
            "o2": "3 h",
            "o3": "4 h ",
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
    correct1 = false;
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
    correct1 = true;
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
        let popup = document.getElementById('popup');
        popup.classList.add("open-popup");
    } else if((correct1 && correct2) || (correct2 && correct3) || (correct3 && correct1)){
        count = 2;
        window.location.replace('level2_w1.html');
    } else if(correct1 || correct2 || correct3){
        count = 1;
        window.location.replace('level2_w4.html');
    } else{
        count = 0;
        let popup = document.getElementById('popuplost');
        popup.classList.add("open-popup");
    }
})