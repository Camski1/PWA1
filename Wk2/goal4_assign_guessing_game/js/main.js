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


  var allInfo = {
	output:document.querySelector("#output"),
	input:document.querySelector("#input"),
	button:document.querySelector("button"),
	mathRan:Math.floor((Math.random()*10)+1)
	};
 	//document.querySelector("#input").placeholder = "Enter your guess:";
	console.log(allInfo.output);
	console.log(allInfo.input);
	console.log(allInfo.button);
	console.log(allInfo.mathRan);
	var round = 0; 
	var remTime = 3;
	 
var game = function(){
	//This is my obj var that will hold all info needed for game.
	
	round++
	remTime--
	console.log("!!!!!!"+ round);
	var valiInp = function(){
		userInp = parseInt(allInfo.input.value);
		if (isNaN(userInp)){
			var info = "NaN";
		}else{
			var info = userInp;
		};
			return info;
	};
	var info = valiInp();
	
	if(info === "NaN"){
		console.log("This is not a number please try again");
		round--
		allInfo.output.innerHTML = "This is not a number please try again";
	}else if(round===3 && (info<allInfo.mathRan || info<allInfo.mathRan)){
		console.log("game over");
		allInfo.output.innerHTML = "Round: " +round+ " OVER, You loose! The correct answer was " +allInfo.mathRan;
		button.onclick = function(e){
		console.log("gameover")

		e.preventDefault();
		return false;
		};
	}else if(round===3 && info===allInfo.mathRan){
		console.log("You win. just in time.");
		allInfo.output.innerHTML = "End of round " +round+ "...BUT You WIN! the answer is " +allInfo.mathRan;
		button.onclick = function(e){
		console.log("gameover")

		e.preventDefault();
		return false;
		};
	}else if(info===allInfo.mathRan && round === 1){
		console.log("you win");
		allInfo.output.innerHTML = "You win on your first try!! the answer was " +allInfo.mathRan;
		button.onclick = function(e){
		console.log("gameover")

		e.preventDefault();
		return false;
		};
	}else if(info===allInfo.mathRan){
		console.log("YOU WIN");
		allInfo.output.innerHTML = "End of round " +round+ "...BUT You WIN! the answer is " +allInfo.mathRan;
		button.onclick = function(e){
		console.log("gameover")

		e.preventDefault();
		return false;
		};
	}else if(info < allInfo.mathRan){
		
		console.log("nope not this time");
		allInfo.output.innerHTML = "That's too low. Round " +round+ " over! You get to try " +remTime+ " more time(s)."
	}else if(info > allInfo.mathRan){
		console.log("nope not this time");
		allInfo.output.innerHTML = "That's too High! Round " +round+ " over! You get to try " +remTime+ " more time(s)."
		
	};

	
  };
    var button = document.querySelector("button")
	button.onclick = function(e){
		game()

		e.preventDefault();
		return false;
	};
})();














