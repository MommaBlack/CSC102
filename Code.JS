// single line comment 
/* multiline comment*/

//This function will let us play a dice game.
function PlayCraps(){
    //We are going to narrate what the function does trhough the console
    console.log("PlayCraps fucntion was called")

    //rol a die
var die1 = RollDie();
console.log("the first die roll is:" + die1);

 //rol a die
 var die2 = RollDie();
 console.log("the first die roll is:" + die2);

 //add the rolls together
 var sum = die1 + die2;
 console.log("The sum of the dice rolls is " + sum);

 //output the dice rools to the html page
 document.getElementById("die1Result"). innerHTML = "die 1 is:" + die1;
 document.getElementById("die2Result"). innerHTML = "die 2 is:" + die2;
 document.getElementById("SumResult"). innerHTML = "The sum is:" + sum;

//lets code the rules of the dice game
//if the sum is 7 or 11 game lost. 
//the bars will mean or == checks if values are the same
if (sum == 7 || sum == 11){
    document.getElementById("crapsResult"). innerHTML = "You Loose:";  
}
//Now lets check if we win by rolling 2 even numbers that match
//first we check if the dice are the same number then we check the modulus ( remainder ) is 0 when the die roll is divided by 2.
//or in other words, was the die roll an even number. 
else if (die1 == die2 && die1 % 2 == 0){
    document.getElementById("crapsResult").innerHTML = "You Win!!!";
}
// if neither of the previous if or else statments were true, then this catchall else statement will be executed. 
else{
    document.getElementById("crapsResult").innerHTML = "You Pushed! (You tied)"; 
}

}
// Create a function that generateds a die roll or a random number between 1 and 6 
function RollDie(){
    //generate a random number 
    //math.random give us a number between 0 and 6
    var die = Math.random() *6;
    //we will get a rounded whole number that will be returned to whatever code calls this function.
    return Math.ceil(die)
}
//cannot debug from Js only html.


// this function will validate the form imput to make sure it meets our critera.
 function validateForm(){
    // Get the first name that the usser entered on the form.
            var firstName = doucmets.getElementById("fname").value;

    // Get the last name that the usser entered on the form.
             var lasttName = doucmets.getElementById("lname").value;

    // Get the zip code that the usser entered on the form.
            var ZipCode = doucmets.getElementById("zip").value;

            console.log("First Name: " + firstName);
            console.log("Last Name: " + lastName);
            console.log("Zip Code: " + zipcode);

    // create a variable to hold firstName + space + lastName 
            var fullName = firstName + " " + lastName;
            console.log("full Name:" + fullName);

    // do the imput validation
    // we will check for more than 20 letters in the first and last names or if no names were entered, the length will be one because of the space we add between first and last name.
            if (fullName.lenght > 20 || fullName.length == 1){
                console.log("Invalid name");
    //let the usser know that they did not enter the information in correctly. 
                alert ("Please enter a name that is shorter than 20 letters.")
    //make sure the form does not submit 
            return false;
            }
                else if (zipCode.length != 5 ){
                console.log("Invalid zip code");
    //let the user know that the zip code was not entered correctly.
                alert("Ziip code was not 5 digits. Please try again.")
    //make sure that form does not submit.
                return false; 
            }
            else{
    // they passed validation! Release the secret word!
                coonsole.log ("We are good to go.");
                alert("Welcome, " + fulName + ". The secret word is validation.");
                return true; 
            }
        


        }


// Here is the code for moving the meme image around. 
//Track the interval id. 
var intervalId = 0;

// This function will make our image move around. 
            function StartImageMove(){
//Create variable that points to our HTML meme image
            var meme = document.getElementById("Spongebob");
            intervalId = setInterval(function(){
//Create a variable to hold the new X coodinate. 
            var newX = getRandomCoordinate();
//Create a variable to hold the new Y coodinate. 
            var newY = Math.floor(Math.random() * 1000);  
            
//lets change the location of our image. 
                meme.style.left = newX + "px";
                meme.style.top = newY +"px";

                console.log("x: " + meme.style.left + "top" + meme.style.top);
            }, 1000); 
// the 1000 is time in miliseconds - 1000 is 1 second.
//this code will move the image every 1 second. 
            }

//Create the function to stop the image from moving. 
            function StopImageMove(){
//Call the built in javascript fucntion to clear the interval - stop image from moving. 
            clearInterval(intervalId);
            }

// create a function to generate our coodinate randomly 
            function getRandomCoordinate(){
//This funciton will return a random coodinate back to the coode that called it. 
                return Math.floor(Math.random() * 1000);
            }



                //*sound code

function addSound(){
    // Create an audio HTML element in JavaScript that will add to the HTML page.
            var soundElem = document.createElement("audio");
    
    // nickname to the play button in the HTML
            var playButton = document.getElementById("btnPlay");
    
    // nickname to the pause button in the HTML
            var pauseButton = document.getElementById("btnPause");
    
    // set the attributes for sound element. for the id make sure there are no spaces.  
            soundElem.setAttribute("id","mySound")
    //specify the sound file 
            soundElem.setAttribute("src","us-lab-background.mp3");
    
    //add the audio p;ayer controls - this is optional
            soundElem.setAttribute("controls","controls");
            
            //add the audio HTML element to the page
            document.body.appendChild(soundElem);
    
            cosole.log("sound element added to the page.")
    
    //Make the play and pause buttons visable
            playButton.hidden = false;
            pauseButton.hidden = false;
    }
    
    //This function runs when the play button is clicked - it plays the sound. 
            function playSound(){
    //Pointer to our new sound element. 
            var audio = document.getElementById("mySound");
    //Play the sound 
            aduio.play();
            console.log("sound played");
            }
    
    //This function runs when the pause button is clicked - it will pause the sound. 
            function pauseSound(){
    //Pointer to our new sound element. 
            var audio = document.getElementById("mySound");
    //Pause the sound. 
            aduio.pause();
            console.log("sound paused");  
            }
            