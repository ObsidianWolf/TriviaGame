/////////////////////////////////////////////////
//////////////////global variables///////////////
/////////////////////////////////////////////////
var data =
    [
        {
            "question": "Who is Cyclops’ father?",
            "answers": ["Starlord", "Wolverine", "Corsair", "Magneto"],
            "correct": "Corsair",
            "gif": "assets/gifImages/corsair&starjammers.gif" // link to the image
        },

        {
            "question": "What is Magneto’s real name?",
            "answers": ["Max Eisenhardt", "Michael Xavier", "Max Lehnsherr", "Erik Lehnsherr"],
            "correct": "Max Eisenhardt",
            "gif": "assets/gifImages/magneto.gif" // link to the image
        },

        {
            "question": "When does Bruce Banner become the Hulk?",
            "answers": ["When he’s Sad", "When he can’t find the remote", "When he eats spinach", "When he’s goes to bed"],
            "correct": "When he can't find the remote",
            "gif": "assets/gifImages/hulk1.gif" // link to the image
        },


        {
            "question": "What does the Hulk say in this phrase “Hulk _____!”",
            "answers": ["Hogan", "Soap", "Smash", "Smoke"],
            "correct": "Smash",
            "gif": "assets/gifImages/hulk2.gif" // link to the image
        },

        {
            "question": "Which Aunt does Peter Parker live with?",
            "answers": ["June", "Venom", "Jemima", "May"],
            "correct": "May",
            "gif": "assets/gifImages/auntMay.gif" // link to the image
        },

        {
            "question": "Who was Peter Parkers’ first love interest?",
            "answers": ["Mary J Watson", "Felicia Hardy", "Natasha Romanova", "Gwen Stacy"],
            "correct": "Mary J Watson",
            "gif": "assets/gifImages/spidey.gif" // link to the image
        },

        {
            "question": "What part of New York is Steve Rogers from?",
            "answers": ["Lower East Side Manhattan", "Bronx", "Queens", "Brooklyn"],
            "correct": "Lower East Side Manhattan",
            "gif": "assets/gifImages/cap.gif",
            // "audio": new Audio('audio_file.mp3');
        },

        {
            "question": "Who is Captain America’s Best Friend?",
            "answers": ["The Falcon", "Winter Soldier", "Hawkeye", "Plank"],
            "correct": "Winter Soldier",
            "gif": "assets/gifImages/wintersoldier.gif" // link to the image
        },

        {
            "question": "Who Murdered Thanos’ Parents",
            "answers": ["Batman", "Dormammu", "Starlord", "Thanos"],
            "correct": "Thanos",
            "gif": "assets/gifImages/keenanthanos.gif" // link to the image
        },

        {
            "question": "Who is King T’challa?",
            "answers": ["Eric Killmonger", "Kendrick Lamar", "Pooty-Tang (Offset)", "Black Panther"],
            "correct": "Black Panther",
            "gif": "assets/gifImages/blkpanther.gif" // link to the image
        }


    ];

console.log(data);

var counter = 0;

var intervalId;

var timer = 31;

var timeoutId;

var correct = 0;

var incorrect = 0;

var unanswered = 0;

var current;



/////////////////////////////////////////////////
/////////////////////////////////////////////////

//In the CountDown function we will subtract 1 from the timer
function countDown() {

    timer--;

    $("#timer").text(timer)

    if(timer === 0){

        counter++;

        timer = 30;

        showquestion();

        run();
    
    }
    
}

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(countDown, 999); 
}

function stop() {
    clearInterval(intervalId);
}


$("#start").click(function () {
    //once the start button is clicked we hide it and display the timer
    $("#start").hide();

    //this will set our timer to start when the start button is pressed
    run();

    showquestion();
});


function showquestion() {

    $("#questions").empty();

    $("#answers").empty();

    current = data[counter];

    var qdiv = $("<p>").text(current.question).addClass("question-text");

    $("#questions").append(qdiv);

    for (i = 0; i < current.answers.length; i++) {
        //for each question create a button for each answer
        console.log("current.answers");

        var adiv = $("<button>").text(current.answers[i]);

        adiv.addClass("answerBtn");

        adiv.attr('data-value', current.answers[i]);

        //inside the answer, classname, value, text, for each one append it to the div that appears undernieth
        $("#answers").append(adiv);

        $("#answers").append('&nbsp;&nbsp;&nbsp;');
    }
}

function showCorrectGif() {

    $("#questions").empty();

    $("#answers").empty(); 

    current = data[counter];

    // current.audio.play();
    var gif = $("<img>").attr("src", current.gif);

    $("#questions").append(gif);    
}



// click function for your .answerBtn class, check the data-value of the clicked button to correct
$(document).on("click", ".answerBtn", function(){
    console.log("click");
    console.log($(this).attr('data-value'));
    var guess = $(this).attr('data-value');
    if(guess === current.correct){
        console.log("correct!")
        // User guessed correct
        showCorrectGif();
        counter++;
        // Increment correct guess
        correct++;
        // Increment counter to progress to the next question
        // Start your timer again now that the time is set to 31
        stop();
    } else {
        console.log("uncorrect!")
        // User guessed wrong
        incorrect++;
        showquestion();
        run();
    }

});