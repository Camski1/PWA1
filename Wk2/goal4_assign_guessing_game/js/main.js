//Cameron Kozinski
//12-07-13
//Guessing Game

/**
 * GUESSING GAME:
 *
 * Created By: 
 * Date: 
 * 
 * GUESSING GAME
 */
 

//Game variables
(function (){

//This is my obj var that will hold all info needed for game.
	var allInfo = {
	output:document.querySelector("#output"),
	input:document.querySelector("#input"),
	button:document.querySelector("button")};
	console.log(allInfo.output);
	console.log(allInfo.input);
	console.log(allInfo.button);

//This is a function that will find a number 1-10
	var mathRan = function(){
		var f1 = Math.floor((Math.random()*10)+1);
		return f1;
	}
//this is adding the info taken from the math function and adding it to my obj array
	allInfo.mathRan = mathRan();
	console.log(allInfo.mathRan)

})();