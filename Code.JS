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